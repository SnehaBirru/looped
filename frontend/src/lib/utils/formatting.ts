export function formatDimension(value: number, unit = "in"): string {
  return `${value} ${unit}`;
}

export function formatGauge(stitches: number, rows: number, unit = "4 in"): string {
  return `${stitches} sts × ${rows} rows per ${unit}`;
}

export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return `${str.slice(0, maxLength - 3)}...`;
}
