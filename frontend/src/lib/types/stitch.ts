export type StitchType =
  | "stockinette"
  | "garter"
  | "rib"
  | "seed"
  | "single-crochet"
  | "double-crochet"
  | "triple-crochet"
  | "half-double-crochet"
  | "other";

export interface StitchOption {
  value: StitchType;
  label: string;
}
