"use client";

import { Input } from "@/components/ui/Input";

export interface GaugeInputProps {
  stitches?: string;
  rows?: string;
  onStitchesChange?: (value: string) => void;
  onRowsChange?: (value: string) => void;
  stitchesError?: string;
  rowsError?: string;
  unit?: string;
}

export function GaugeInput({
  stitches,
  rows,
  onStitchesChange,
  onRowsChange,
  stitchesError,
  rowsError,
  unit = "4 in",
}: GaugeInputProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Input
        label={`Stitches per ${unit}`}
        type="number"
        min={0}
        value={stitches ?? ""}
        onChange={(e) => onStitchesChange?.(e.target.value)}
        error={stitchesError}
      />
      <Input
        label={`Rows per ${unit}`}
        type="number"
        min={0}
        value={rows ?? ""}
        onChange={(e) => onRowsChange?.(e.target.value)}
        error={rowsError}
      />
    </div>
  );
}
