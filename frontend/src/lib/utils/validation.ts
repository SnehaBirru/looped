import type { FormState } from "@/lib/hooks/useForm";
import { MIN_DIMENSION, MAX_DIMENSION, MIN_GAUGE } from "@/lib/utils/constants";

export interface ValidationErrors {
  itemType?: string;
  width?: string;
  height?: string;
  gaugeStitches?: string;
  gaugeRows?: string;
  stitchType?: string;
}

export function validatePatternForm(state: FormState): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!state.itemType?.trim()) {
    errors.itemType = "Item type is required";
  }

  const width = parseFloat(state.width);
  if (Number.isNaN(width) || width < MIN_DIMENSION || width > MAX_DIMENSION) {
    errors.width = `Width must be between ${MIN_DIMENSION} and ${MAX_DIMENSION}`;
  }

  const height = parseFloat(state.height);
  if (Number.isNaN(height) || height < MIN_DIMENSION || height > MAX_DIMENSION) {
    errors.height = `Height must be between ${MIN_DIMENSION} and ${MAX_DIMENSION}`;
  }

  const gaugeStitches = parseFloat(state.gaugeStitches);
  if (Number.isNaN(gaugeStitches) || gaugeStitches < MIN_GAUGE) {
    errors.gaugeStitches = `Stitches must be at least ${MIN_GAUGE}`;
  }

  const gaugeRows = parseFloat(state.gaugeRows);
  if (Number.isNaN(gaugeRows) || gaugeRows < MIN_GAUGE) {
    errors.gaugeRows = `Rows must be at least ${MIN_GAUGE}`;
  }

  if (!state.stitchType?.trim()) {
    errors.stitchType = "Stitch type is required";
  }

  return errors;
}
