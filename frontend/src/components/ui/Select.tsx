import React from 'react'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: { value: string; label: string }[]
}

export default function Select({ label, options, label: selectLabel, ...props }: SelectProps) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {selectLabel && (
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          {selectLabel}
        </label>
      )}
      <select
        {...props}
        style={{
          padding: '0.5rem',
          width: '200px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          ...props.style,
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
