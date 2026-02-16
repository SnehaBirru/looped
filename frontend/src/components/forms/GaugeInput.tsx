'use client'

import Input from '@/components/ui/Input'

interface GaugeInputProps {
  stitchPerGauge: string
  rowsPerGauge: string
  onStitchPerGaugeChange: (value: string) => void
  onRowsPerGaugeChange: (value: string) => void
}

export default function GaugeInput({
  stitchPerGauge,
  rowsPerGauge,
  onStitchPerGaugeChange,
  onRowsPerGaugeChange,
}: GaugeInputProps) {
  return (
    <>
      <Input
        label="Stitches per 4 inches (gauge)"
        type="number"
        step="0.1"
        value={stitchPerGauge}
        onChange={(e) => onStitchPerGaugeChange(e.target.value)}
        required
      />
      <Input
        label="Rows per 4 inches (gauge)"
        type="number"
        step="0.1"
        value={rowsPerGauge}
        onChange={(e) => onRowsPerGaugeChange(e.target.value)}
        required
      />
    </>
  )
}
