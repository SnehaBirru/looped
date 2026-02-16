import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {label && (
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          {label}
        </label>
      )}
      <input
        {...props}
        style={{
          padding: '0.5rem',
          width: '200px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          ...props.style,
        }}
      />
    </div>
  )
}
