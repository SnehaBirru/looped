import { apiClient } from "./client";
import type { Pattern, PatternGenerateRequest } from "@/lib/types/pattern";

export async function generatePattern(
  body: PatternGenerateRequest
): Promise<Pattern> {
  return apiClient<Pattern>("/generate", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export async function getPattern(id: string): Promise<Pattern> {
  return apiClient<Pattern>(`/patterns/${id}`);
}
