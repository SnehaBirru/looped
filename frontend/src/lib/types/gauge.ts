export interface Gauge {
  stitchesPerUnit: number;
  rowsPerUnit: number;
  unit?: string; // e.g. "4 in"
}

export interface GaugeInput {
  stitches: number;
  rows: number;
  unit?: string;
}
