'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <nav style={{ marginBottom: '2rem' }}>
      <Link href="/" style={{ marginRight: '1rem', textDecoration: 'none' }}>
        Home
      </Link>
      <Link href="/generate" style={{ textDecoration: 'none' }}>
        Generate
      </Link>
    </nav>
  )
}
