export interface Battery {
  sn: string;
  alias: string;
  model: string;
  status: string;
  soc: number;
  soh: number;
  voltage: number;
  current: number;
  power: number;
  chargingState: 'charging' | 'discharging' | 'standby';
  tempMax: number;
  tempMin: number;
  cellTemps: number[];
  cellVoltages: number[];
  cellVoltageMax: number | null;
  cellVoltageMin: number | null;
  cellDelta: number | null;
  maxCellNum: number | null;
  minCellNum: number | null;
  modules: {
    index: number;
    cells: number[];
    temp: number | null;
    min: number;
    max: number;
    delta: number;
  }[];
  chargeVoltLimit: number | null;
  dischargeVoltLimit: number | null;
  chargeCurrLimit: number | null;
  dischargeCurrLimit: number | null;
  batCycleIndex: number | null;
  batFullCount: number | null;
  batUnderVoltageCount: number | null;
  warningCount: number;
  remainingKwh: number;
  capacityAh: number;
  ratedEnergyKwh: number | null;
  dataTime: string | null;
  wifiSignal: number;
  isBalancing: boolean;
}

export interface TrendEntry {
  direction:              string;
  deltaChange:            number;
  history:                number[];
  balancingCount:         number;
  snapshotCount:          number;
  currentBalancingStreak: number;
}

export interface HealthEntry {
  soc: number;
  socStatus: string;
  cellDeltaStatus: string;
  outliers: number[];
  trend: string | null;
}

export interface HealthResponse {
  [sn: string]: HealthEntry;
}

export interface Alert {
  sn: string;
  alias: string;
  type: string;
  message: string;
  severity: 'info' | 'warn' | 'error';
  ts: string;
}

export interface AlertsResponse {
  alerts: Alert[];
  count: number;
}

export interface Snapshot {
  ts: string;
  batteries: {
    sn: string;
    alias: string;
    soc: number;
    power: number;
    cellDelta: number | null;
    tempMax: number;
    voltage: number;
    current: number;
    chargingState: string;
  }[];
}

export interface SnapshotsResponse {
  snapshots: Snapshot[];
}

/** One battery entry in a daily raw snapshot (same shape as intraday SnapshotEntry). */
export interface DailyRawEntry {
  sn:            string;
  alias:         string;
  soc:           number;
  soh:           number;
  power:         number;
  cellDelta:     number | null;
  cellMin:       number | null;
  cellMax:       number | null;
  voltages:      number[];
  temps:         number[];
  tempMax:       number | null;
  tempMin:       number | null;
  warningCount:  number;
  batCycleIndex: number | null;
  isBalancing:   boolean;
}

/**
 * Raw daily snapshot from /snapshots/daily.
 * DailySnapshotStore stores 2 per day:
 *   ts ending T11:59:59Z = snapshot with lowest pack total voltage (day's low)
 *   ts ending T12:00:01Z = snapshot with highest pack total voltage (day's high)
 */
export interface DailyRawSnapshot {
  ts:        string;
  batteries: DailyRawEntry[];
}

export interface DailySnapshotsResponse {
  snapshots: DailyRawSnapshot[];
}

export class FsolarApi {
  private base: string;
  private apiKey?: string;

  constructor(base: string, apiKey?: string) {
    this.base = base.replace(/\/$/, '');
    this.apiKey = apiKey;
  }

  private get headers(): Record<string, string> {
    const h: Record<string, string> = { 'Accept': 'application/json' };
    if (this.apiKey) h['Authorization'] = `Bearer ${this.apiKey}`;
    return h;
  }

  async fetch<T>(path: string): Promise<T> {
    const r = await fetch(`${this.base}${path}`, { headers: this.headers });
    if (r.status === 401) throw new Error('AUTH_FAILED');
    if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
    return r.json() as Promise<T>;
  }

  async batteries(): Promise<{ batteries: Battery[]; trend: Record<string, TrendEntry> }> {
    return this.fetch('/batteries');
  }

  async health(): Promise<HealthResponse> {
    return this.fetch<HealthResponse>('/health');
  }

  async alerts(): Promise<AlertsResponse> {
    return this.fetch<AlertsResponse>('/alerts');
  }

  async snapshotsIntraday(): Promise<SnapshotsResponse> {
    return this.fetch<SnapshotsResponse>('/snapshots/intraday');
  }

  async snapshotsDaily(): Promise<DailySnapshotsResponse> {
    return this.fetch<DailySnapshotsResponse>('/snapshots/daily');
  }

  subscribeSSE(
    onData: (event: string, data: unknown) => void,
    onError?: (e: Event) => void,
  ): () => void {
    const es = new EventSource(`${this.base}/events`);
    es.addEventListener('snapshot', (e: MessageEvent) => {
      try { onData('snapshot', JSON.parse(e.data as string)); } catch { /* ignore parse errors */ }
    });
    es.addEventListener('state', (e: MessageEvent) => {
      try { onData('state', JSON.parse(e.data as string)); } catch { /* ignore parse errors */ }
    });
    if (onError) es.onerror = onError;
    return () => es.close();
  }
}
