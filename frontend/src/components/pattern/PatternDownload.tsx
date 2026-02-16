"use client";

import { Button } from "@/components/ui/Button";
import type { Pattern } from "@/lib/types/pattern";

export interface PatternDownloadProps {
  pattern: Pattern | null;
  filename?: string;
}

export function PatternDownload({ pattern, filename = "pattern.txt" }: PatternDownloadProps) {
  const handleDownload = () => {
    if (!pattern?.content) return;
    const blob = new Blob([pattern.content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Button onClick={handleDownload} disabled={!pattern?.content}>
      Download pattern
    </Button>
  );
}
