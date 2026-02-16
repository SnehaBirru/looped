"use client";

import { useState, useCallback } from "react";

export interface FormState {
  itemType: string;
  width: string;
  height: string;
  gaugeStitches: string;
  gaugeRows: string;
  stitchType: string;
}

const initialFormState: FormState = {
  itemType: "",
  width: "",
  height: "",
  gaugeStitches: "",
  gaugeRows: "",
  stitchType: "",
};

export function useForm(initial: Partial<FormState> = {}) {
  const [state, setState] = useState<FormState>({
    ...initialFormState,
    ...initial,
  });

  const setField = useCallback(<K extends keyof FormState>(field: K, value: FormState[K]) => {
    setState((prev) => ({ ...prev, [field]: value }));
  }, []);

  const setFields = useCallback((updates: Partial<FormState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  }, []);

  const reset = useCallback(() => {
    setState({ ...initialFormState, ...initial });
  }, [initial]);

  return { state, setField, setFields, reset };
}
