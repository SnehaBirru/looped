'use client'

import { PatternResponse } from '@/lib/types/pattern'
import Card from '@/components/ui/Card'

interface PatternDisplayProps {
  pattern: PatternResponse
}

export default function PatternDisplay({ pattern }: PatternDisplayProps) {
  return (
    <>
      <Card title="Materials Needed">
        <ul>
          <li>Yarn: {pattern.materials.yarn_skeins} skeins ({pattern.materials.yarn_yards} yards)</li>
          <li>Hook Size: {pattern.materials.hook_size}</li>
          <li>Width: {pattern.materials.width_stitches} stitches</li>
          <li>Height: {pattern.materials.height_rows} rows</li>
          <li>Total Stitches: {pattern.materials.total_stitches}</li>
        </ul>
      </Card>

      <Card title="Instructions">
        <ol>
          {pattern.instructions.map((instruction, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>
              {instruction}
            </li>
          ))}
        </ol>
      </Card>
    </>
  )
}
