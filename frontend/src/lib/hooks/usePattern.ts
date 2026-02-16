"use client";

import { useState, useCallback } from "react";
import { generatePattern as generatePatternApi } from "@/lib/api/endpoints";
import type { Pattern, PatternGenerateRequest } from "@/lib/types/pattern";

export function usePattern() {
  const [pattern, setPattern] = useState<Pattern | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = useCallback(async (request: PatternGenerateRequest) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await generatePatternApi(request);
      setPattern(result);
      return result;
    } catch (e) {
      const message = e instanceof Error ? e.message : "Failed to generate pattern";
      setError(message);
      setPattern(null);
      throw e;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setPattern(null);
    setError(null);
  }, []);

  return { pattern, isLoading, error, generate, reset };
}
