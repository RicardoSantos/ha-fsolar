export interface FleetCardConfig {
  type: string;
  url: string;
  api_key?: string;
  mode?: 'sse' | 'poll';
  poll_interval?: number;
  show_trend?: boolean;
  show_module_temps?: boolean;
  title?: string;
}
