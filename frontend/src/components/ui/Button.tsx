import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export default function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      style={{
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        cursor: props.disabled ? 'not-allowed' : 'pointer',
        backgroundColor: variant === 'primary' ? '#0070f3' : '#f0f0f0',
        color: variant === 'primary' ? 'white' : 'black',
        border: 'none',
        borderRadius: '4px',
        ...props.style,
      }}
    >
      {children}
    </button>
  )
}
