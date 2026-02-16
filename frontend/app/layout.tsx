export const metadata = {
  title: 'Tote Bag Pattern Generator',
  description: 'Generate crochet patterns for tote bags',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
