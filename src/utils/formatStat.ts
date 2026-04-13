export function formatStatValue(value: number): string {
  if (value >= 1_000_000) {
    const millions = value / 1_000_000;
    const rounded = Math.floor(millions * 10) / 10;
    const str = rounded % 1 === 0 ? `${rounded}` : rounded.toFixed(1);
    return `${str}M+`;
  }
  if (value >= 100_000) {
    const thousands = Math.floor(value / 1_000);
    return `${thousands}k`;
  }
  const rounded = Math.floor(value / 10_000) * 10_000;
  const formatted =
    rounded >= 1_000 ? rounded.toLocaleString() : String(rounded);
  return `${formatted}+`;
}
