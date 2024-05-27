// components/MDXComponent.tsx
import React from 'react';
import { preStyle, codeTitleStyle, codeTitleNextPreStyle, codeStyle } from './MDXComponent.css';

// Props 타입 정의
type PreProps = React.ComponentPropsWithoutRef<'pre'>;
type CodeProps = React.ComponentPropsWithoutRef<'code'>;
type FigcaptionProps = React.ComponentPropsWithoutRef<'figcaption'>;

const MDXComponents = {
  pre: (props : PreProps) => <pre className={preStyle} {...props} />,
  code: (props : CodeProps) => <code className={codeStyle} {...props} />,
  figcaption: (props : FigcaptionProps) => <figcaption className={codeTitleStyle} {...props} />,
};

export default MDXComponents;
