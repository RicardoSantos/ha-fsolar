export interface HistoryCardConfig {
  type: string;
  url: string;
  api_key?: string;
  default_tab?: 'recent' | 'daily' | 'lifetime';
  title?: string;
}
