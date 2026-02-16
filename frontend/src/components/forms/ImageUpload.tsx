"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/Button";

export interface ImageUploadProps {
  onFileSelect?: (file: File | null) => void;
  accept?: string;
  maxSizeBytes?: number;
  error?: string;
}

export function ImageUpload({
  onFileSelect,
  accept = "image/*",
  maxSizeBytes,
  error,
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file && maxSizeBytes && file.size > maxSizeBytes) {
      onFileSelect?.(null);
      return;
    }
    onFileSelect?.(file);
  };

  return (
    <div className="w-full">
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleChange}
        className="hidden"
      />
      <Button
        type="button"
        variant="outline"
        onClick={() => inputRef.current?.click()}
      >
        Upload image
      </Button>
      {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
    </div>
  );
}
