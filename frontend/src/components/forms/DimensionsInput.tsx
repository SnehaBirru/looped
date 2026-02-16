"use client";

import { Input } from "@/components/ui/Input";

export interface DimensionsInputProps {
  width?: string;
  height?: string;
  onWidthChange?: (value: string) => void;
  onHeightChange?: (value: string) => void;
  widthError?: string;
  heightError?: string;
  unit?: string;
}

export function DimensionsInput({
  width,
  height,
  onWidthChange,
  onHeightChange,
  widthError,
  heightError,
  unit = "in",
}: DimensionsInputProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Input
        label={`Width (${unit})`}
        type="number"
        min={0}
        step="0.1"
        value={width ?? ""}
        onChange={(e) => onWidthChange?.(e.target.value)}
        error={widthError}
      />
      <Input
        label={`Height (${unit})`}
        type="number"
        min={0}
        step="0.1"
        value={height ?? ""}
        onChange={(e) => onHeightChange?.(e.target.value)}
        error={heightError}
      />
    </div>
  );
}
