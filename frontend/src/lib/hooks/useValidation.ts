"use client";

import { useCallback } from "react";
import { validatePatternForm, type ValidationErrors } from "@/lib/utils/validation";
import type { FormState } from "./useForm";

export type { ValidationErrors };

export function useValidation() {
  const validate = useCallback((state: FormState): ValidationErrors => {
    return validatePatternForm(state);
  }, []);

  const isValid = useCallback(
    (state: FormState): boolean => {
      const errors = validate(state);
      return Object.keys(errors).length === 0;
    },
    [validate]
  );

  return { validate, isValid };
}
