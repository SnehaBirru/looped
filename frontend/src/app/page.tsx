import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Tote Bag Pattern Generator</h1>
      <p>
        <Link href="/generate">Go to Pattern Generator</Link>
      </p>
    </div>
  )
}
