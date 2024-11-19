'use client';

import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@/shared/atom/mdx-component/mdx-component';

export function MdxProvider({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={MDXComponents}>
        {children}
    </MDXProvider>
  );
}