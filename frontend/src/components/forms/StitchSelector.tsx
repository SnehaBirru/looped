'use client'

import Select from '@/components/ui/Select'

interface StitchSelectorProps {
  value: string
  onChange: (value: string) => void
}

export default function StitchSelector({ value, onChange }: StitchSelectorProps) {
  const stitches = [
    { value: 'single_crochet', label: 'Single Crochet (sc)' },
    { value: 'double_crochet', label: 'Double Crochet (dc)' },
    { value: 'half_double_crochet', label: 'Half Double Crochet (hdc)' },
    { value: 'treble_crochet', label: 'Treble Crochet (tr)' },
  ]

  return (
    <Select
      label="Stitch Type"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      options={stitches}
    />
  )
}
