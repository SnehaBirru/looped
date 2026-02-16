'use client'

import Select from '@/components/ui/Select'

interface ItemTypeSelectorProps {
  value: string
  onChange: (value: string) => void
}

export default function ItemTypeSelector({ value, onChange }: ItemTypeSelectorProps) {
  const itemTypes = [
    { value: 'tote', label: 'Tote Bag' },
    // Future: Add more item types
    // { value: 'hat', label: 'Hat' },
    // { value: 'scarf', label: 'Scarf' },
  ]

  return (
    <Select
      label="Item Type"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      options={itemTypes}
    />
  )
}
