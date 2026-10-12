export interface HistoryCardConfig {
  type: string;
  url: string;
  api_key?: string;
  default_tab?: 'recent' | 'daily' | 'lifetime' | 'energy';
  title?: string;
  /** €/kWh used to estimate savings on the Energy tab. Omit to use the server's FELICITY_TARIFF_KWH default. */
  tariff?: number;
}
