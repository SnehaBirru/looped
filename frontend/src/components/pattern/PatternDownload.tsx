'use client'

import { PatternResponse } from '@/lib/types/pattern'
import Button from '@/components/ui/Button'

interface PatternDownloadProps {
  pattern: PatternResponse
}

export default function PatternDownload({ pattern }: PatternDownloadProps) {
  const handleDownload = () => {
    const content = `
Materials Needed:
- Yarn: ${pattern.materials.yarn_skeins} skeins (${pattern.materials.yarn_yards} yards)
- Hook Size: ${pattern.materials.hook_size}
- Width: ${pattern.materials.width_stitches} stitches
- Height: ${pattern.materials.height_rows} rows
- Total Stitches: ${pattern.materials.total_stitches}

Instructions:
${pattern.instructions.map((inst, i) => `${i + 1}. ${inst}`).join('\n')}
    `.trim()

    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'pattern.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <Button onClick={handleDownload} variant="secondary">
      Download Pattern
    </Button>
  )
}
