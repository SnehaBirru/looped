'use client'

import { useState } from 'react'

interface PatternRequest {
  width: number
  height: number
  stitch_per_gauge: number
  rows_per_gauge: number
  item_type?: string
}

interface Materials {
  yarn_skeins: number
  yarn_yards: number
  hook_size: string
  width_stitches: number
  height_rows: number
  total_stitches: number
}

interface PatternResponse {
  materials: Materials
  instructions: string[]
}

export default function TotePage() {
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [stitchPerIn, setStitchPerIn] = useState('')
  const [rowsPerIn, setRowsPerIn] = useState('')
  const [loading, setLoading] = useState(false)
  const [pattern, setPattern] = useState<PatternResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setPattern(null)

    try {
      const response = await fetch('http://localhost:8000/generate-pattern', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          width: parseFloat(width),
          height: parseFloat(height),
          stitch_per_gauge: parseFloat(stitchPerIn),
          rows_per_gauge: parseFloat(rowsPerIn),
          item_type: "tote",
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate pattern')
      }

      const data = await response.json()
      setPattern(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Tote Bag Pattern Generator</h1>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>
            Width (inches):
            <input
              type="number"
              step="0.1"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              required
              style={{ marginLeft: '0.5rem', padding: '0.5rem', width: '200px' }}
            />
          </label>
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>
            Height (inches):
            <input
              type="number"
              step="0.1"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
              style={{ marginLeft: '0.5rem', padding: '0.5rem', width: '200px' }}
            />
          </label>
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>
            Stitches per 4 inches (gauge):
            <input
              type="number"
              step="0.1"
              value={stitchPerIn}
              onChange={(e) => setStitchPerIn(e.target.value)}
              required
              style={{ marginLeft: '0.5rem', padding: '0.5rem', width: '200px' }}
            />
          </label>
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>
            Rows per 4 inches (gauge):
            <input
              type="number"
              step="0.1"
              value={rowsPerIn}
              onChange={(e) => setRowsPerIn(e.target.value)}
              required
              style={{ marginLeft: '0.5rem', padding: '0.5rem', width: '200px' }}
            />
          </label>
        </div>
        
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

      {pattern && (
        <div>
          <h2>Materials Needed</h2>
          <ul>
            <li>Yarn: {pattern.materials.yarn_skeins} skeins ({pattern.materials.yarn_yards} yards)</li>
            <li>Hook Size: {pattern.materials.hook_size}</li>
            <li>Width: {pattern.materials.width_stitches} stitches</li>
            <li>Height: {pattern.materials.height_rows} rows</li>
            <li>Total Stitches: {pattern.materials.total_stitches}</li>
          </ul>

          <h2>Instructions</h2>
          <ol>
            {pattern.instructions.map((instruction, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  )
}
