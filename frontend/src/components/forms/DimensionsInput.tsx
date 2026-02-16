'use client'

import Input from '@/components/ui/Input'

interface DimensionsInputProps {
  width: string
  height: string
  onWidthChange: (value: string) => void
  onHeightChange: (value: string) => void
}

export default function DimensionsInput({
  width,
  height,
  onWidthChange,
  onHeightChange,
}: DimensionsInputProps) {
  return (
    <>
      <Input
        label="Width (inches)"
        type="number"
        step="0.1"
        value={width}
        onChange={(e) => onWidthChange(e.target.value)}
        required
      />
      <Input
        label="Height (inches)"
        type="number"
        step="0.1"
        value={height}
        onChange={(e) => onHeightChange(e.target.value)}
        required
      />
    </>
  )
}
