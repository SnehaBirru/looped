"use client";

import { Select, type SelectOption } from "@/components/ui/Select";

const itemTypes: SelectOption[] = [
  { value: "scarf", label: "Scarf" },
  { value: "hat", label: "Hat" },
  { value: "sweater", label: "Sweater" },
  { value: "blanket", label: "Blanket" },
  { value: "other", label: "Other" },
];

export interface ItemTypeSelectorProps {
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
}

export function ItemTypeSelector({ value, onChange, error }: ItemTypeSelectorProps) {
  return (
    <Select
      label="Item type"
      options={itemTypes}
      value={value ?? ""}
      onChange={(e) => onChange?.(e.target.value)}
      error={error}
    />
  );
}
