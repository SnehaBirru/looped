'use client'

import React from 'react'
import Card from '@/components/ui/Card'

interface PatternSectionProps {
  title: string
  children: React.ReactNode
}

export default function PatternSection({ title, children }: PatternSectionProps) {
  return <Card title={title}>{children}</Card>
}
