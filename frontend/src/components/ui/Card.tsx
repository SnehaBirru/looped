import React from 'react'

interface CardProps {
  title?: string
  children: React.ReactNode
}

export default function Card({ title, children }: CardProps) {
  return (
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '1rem',
      }}
    >
      {title && <h2 style={{ marginBottom: '1rem' }}>{title}</h2>}
      {children}
    </div>
  )
}
