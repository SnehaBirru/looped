"use client";

import { Select, type SelectOption } from "@/components/ui/Select";

const stitchOptions: SelectOption[] = [
  { value: "stockinette", label: "Stockinette" },
  { value: "garter", label: "Garter" },
  { value: "rib", label: "Rib" },
  { value: "seed", label: "Seed" },
  { value: "single-crochet", label: "Single Crochet" },
  { value: "double-crochet", label: "Double Crochet" },
  { value: "other", label: "Other" },
];

export interface StitchSelectorProps {
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
}

export function StitchSelector({ value, onChange, error }: StitchSelectorProps) {
  return (
    <Select
      label="Stitch type"
      options={stitchOptions}
      value={value ?? ""}
      onChange={(e) => onChange?.(e.target.value)}
      error={error}
    />
  );
}
