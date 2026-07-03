const CURVE: [number, number][] = [
  [3000, 0], [3100, 2], [3200, 10], [3250, 20], [3280, 40],
  [3300, 60], [3320, 80], [3350, 90], [3400, 95], [3450, 99], [3500, 100],
];

export function voltageToSocPct(mv: number): number {
  if (mv <= CURVE[0][0]) return 0;
  if (mv >= CURVE[CURVE.length - 1][0]) return 100;
  for (let i = 1; i < CURVE.length; i++) {
    const [v0, s0] = CURVE[i - 1];
    const [v1, s1] = CURVE[i];
    if (mv <= v1) {
      const t = (mv - v0) / (v1 - v0);
      return Math.round(s0 + t * (s1 - s0));
    }
  }
  return 100;
}
