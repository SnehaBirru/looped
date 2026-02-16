"use client";

import type { Pattern } from "../../lib/types/pattern";

export interface PatternDisplayProps {
  pattern: Pattern | null;
  isLoading?: boolean;
}

export function PatternDisplay({ pattern, isLoading }: PatternDisplayProps) {
  if (isLoading) {
    return (
      <div className="flex min-h-[200px] items-center justify-center rounded-lg border border-dashed p-8">
        <p className="text-muted-foreground">Generating pattern…</p>
      </div>
    );
  }
  if (!pattern) {
    return (
      <div className="flex min-h-[200px] items-center justify-center rounded-lg border border-dashed p-8">
        <p className="text-muted-foreground">No pattern to display.</p>
      </div>
    );
  }
  return (
    <div className="rounded-lg border bg-card p-6">
      <pre className="whitespace-pre-wrap font-mono text-sm">{pattern.content}</pre>
    </div>
  );
}
