export const C = {
  green:  '#00ff88',
  cyan:   '#00bcd4',
  yellow: '#ffd700',
  orange: '#ff8c00',
  red:    '#ff4444',
  grey:   '#555e6b',
  dim:    '#7a8491',
  text:   '#c9d1d9',
  bg:     '#0d1117',
  panel:  '#161b22',
  border: '#30363d',
} as const;

export function cellColour(
  cellIdx: number,
  mv: number,
  avgMv: number,
  packMinIdx: number,
  packMaxIdx: number,
  outlierIdxs: number[],
): string {
  if (outlierIdxs.includes(cellIdx)) return C.orange;
  if (cellIdx === packMinIdx) return C.red;
  if (cellIdx === packMaxIdx) return C_BLUE;
  if (Math.abs(mv - avgMv) <= 10) return C.green;
  return C.dim;
}

export const C_BLUE = '#4fc3f7';

export function deltaColour(mv: number): string {
  if (mv < 30) return C.green;
  if (mv < 80) return C.yellow;
  if (mv < 150) return C.orange;
  return C.red;
}

export function socColour(pct: number): string {
  if (pct > 80) return C.green;
  if (pct > 40) return '#aaff44';
  if (pct > 20) return C.orange;
  return C.red;
}

export function healthColour(status: string): string {
  if (status === 'good' || status === 'ok') return C.green;
  if (status === 'warn' || status === 'warning') return C.yellow;
  return C.red;
}

export const BATTERY_COLOURS = [C.green, C.cyan, C.orange, '#b39ddb', '#f48fb1'];

export function batteryColour(idx: number): string {
  return BATTERY_COLOURS[idx % BATTERY_COLOURS.length];
}
