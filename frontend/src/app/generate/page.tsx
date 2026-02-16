'use client'

import { useState } from 'react'
import { generatePattern } from '@/lib/api/endpoints'
import { PatternResponse } from '@/lib/types/pattern'
import DimensionsInput from '@/components/forms/DimensionsInput'
import GaugeInput from '@/components/forms/GaugeInput'
import PatternDisplay from '@/components/pattern/PatternDisplay'

export default function GeneratePage() {
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [stitchPerGauge, setStitchPerGauge] = useState('')
  const [rowsPerGauge, setRowsPerGauge] = useState('')
  const [loading, setLoading] = useState(false)
  const [pattern, setPattern] = useState<PatternResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setPattern(null)

    try {
      const data = await generatePattern({
        width: parseFloat(width),
        height: parseFloat(height),
        stitch_per_gauge: parseFloat(stitchPerGauge),
        rows_per_gauge: parseFloat(rowsPerGauge),
        item_type: "tote",
      })
      setPattern(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Pattern Generator</h1>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <DimensionsInput
          width={width}
          height={height}
          onWidthChange={setWidth}
          onHeightChange={setHeight}
        />
        
        <GaugeInput
          stitchPerGauge={stitchPerGauge}
          rowsPerGauge={rowsPerGauge}
          onStitchPerGaugeChange={setStitchPerGauge}
          onRowsPerGaugeChange={setRowsPerGauge}
        />
        
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'Generating...' : 'Generate Pattern'}
        </button>
      </form>

      {error && (
        <div style={{ color: 'red', marginBottom: '1rem' }}>
          Error: {error}
        </div>
      )}

      {pattern && <PatternDisplay pattern={pattern} />}
    </div>
  )
}
