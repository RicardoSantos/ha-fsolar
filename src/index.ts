import { FelicityFleetCard } from './cards/fleet-card/index';
import { FelicityFleetCardEditor } from './cards/fleet-card/editor';
import { FelicityHistoryCard } from './cards/history-card/index';
import { FelicityHistoryCardEditor } from './cards/history-card/editor';

customElements.define('felicity-fleet-card', FelicityFleetCard);
customElements.define('felicity-fleet-card-editor', FelicityFleetCardEditor);
customElements.define('felicity-history-card', FelicityHistoryCard);
customElements.define('felicity-history-card-editor', FelicityHistoryCardEditor);

interface CustomCard {
  type: string;
  name: string;
  description: string;
  preview?: boolean;
  documentationURL?: string;
}

declare global {
  interface Window {
    customCards: CustomCard[];
  }
}

window.customCards = window.customCards || [];
window.customCards.push(
  {
    type: 'felicity-fleet-card',
    name: 'Felicity Fleet Card',
    description: 'Real-time Felicity Solar battery fleet monitor — live SOC, cell voltages, temperatures',
    preview: true,
    documentationURL: 'https://github.com/RicardoSantos/ha-fsolar',
  },
  {
    type: 'felicity-history-card',
    name: 'Felicity Battery History',
    description: 'Cell delta trends, temperature history and deviation heatmap (24h + daily)',
    preview: true,
    documentationURL: 'https://github.com/RicardoSantos/ha-fsolar',
  },
);

console.info(
  '%c FELICITY BATTERY CARDS %c loaded ',
  'background:#00bcd4;color:#000;font-weight:700',
  'background:#161b22;color:#00bcd4',
);
