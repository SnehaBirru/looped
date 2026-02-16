'use client'

import React from 'react'

interface ImageUploadProps {
  onImageSelect: (file: File) => void
}

export default function ImageUpload({ onImageSelect }: ImageUploadProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onImageSelect(file)
    }
  }

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'block', marginBottom: '0.5rem' }}>
        Upload Image (optional)
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{
          padding: '0.5rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
    </div>
  )
}
