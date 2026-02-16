"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

export interface PatternSectionProps {
  title: string;
  children: React.ReactNode;
}

export function PatternSection({ title, children }: PatternSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
