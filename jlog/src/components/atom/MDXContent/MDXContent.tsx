'use client'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@/components/atom/MDXcomponent/MDXComponent'

export default function MDXContent({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={MDXComponents}>
      {children}
    </MDXProvider>
  )
}