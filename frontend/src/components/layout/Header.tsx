'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header
      style={{
        padding: '1rem 2rem',
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '2rem',
      }}
    >
      <nav>
        <Link href="/" style={{ marginRight: '1rem', textDecoration: 'none' }}>
          Home
        </Link>
        <Link href="/generate" style={{ textDecoration: 'none' }}>
          Generate Pattern
        </Link>
      </nav>
    </header>
  )
}
