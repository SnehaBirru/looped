"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { Pattern, PatternGenerateRequest } from "@/lib/types/pattern";
import { generatePattern as generatePatternApi } from "@/lib/api/endpoints";

interface PatternContextValue {
  pattern: Pattern | null;
  isLoading: boolean;
  error: string | null;
  generate: (request: PatternGenerateRequest) => Promise<Pattern | null>;
  reset: () => void;
}

const PatternContext = createContext<PatternContextValue | null>(null);

export function PatternProvider({ children }: { children: ReactNode }) {
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
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setPattern(null);
    setError(null);
  }, []);

  return (
    <PatternContext.Provider
      value={{ pattern, isLoading, error, generate, reset }}
    >
      {children}
    </PatternContext.Provider>
  );
}

export function usePatternContext() {
  const ctx = useContext(PatternContext);
  if (!ctx) {
    throw new Error("usePatternContext must be used within PatternProvider");
  }
  return ctx;
}
