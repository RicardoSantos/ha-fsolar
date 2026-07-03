export function formatW(w: number): string {
  if (Math.abs(w) >= 1000) return `${(w / 1000).toFixed(1)} kW`;
  return `${Math.round(w)} W`;
}

export function formatA(a: number): string {
  return `${a >= 0 ? '+' : ''}${a.toFixed(1)} A`;
}

export function formatV(v: number): string {
  return `${v.toFixed(1)} V`;
}

export function formatMv(mv: number): string {
  return `${Math.round(mv)} mV`;
}

export function formatKwh(kwh: number): string {
  return `${kwh.toFixed(1)} kWh`;
}

export function formatTimeRemaining(hours: number): string {
  if (!isFinite(hours) || hours <= 0) return '—';
  if (hours < 1 / 60) return '<1m';
  if (hours < 1) return `${Math.round(hours * 60)}m`;
  if (hours < 24) return `${hours.toFixed(1)}h`;
  return `${(hours / 24).toFixed(1)}d`;
}

export function formatEta(hoursFromNow: number): string {
  const d = new Date(Date.now() + hoursFromNow * 3600_000);
  const hh = d.getHours().toString().padStart(2, '0');
  const mm = d.getMinutes().toString().padStart(2, '0');
  const label = hoursFromNow >= 24 ? ' tomorrow' : '';
  return `${hh}:${mm}${label}`;
}

export function formatTemp(c: number): string {
  return `${Math.round(c)}°C`;
}

export function formatDbm(dbm: number): string {
  return `${dbm} dBm`;
}
