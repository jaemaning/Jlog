// components/MDXComponent.tsx
import { preStyle, codeTitleStyle, codeTitleNextPreStyle, codeStyle } from './MDXComponent.css';

const MDXComponents = {
  pre: (props) => <pre className={preStyle} {...props} />,
  code: (props) => <code className={codeStyle} {...props} />,
  figcaption: (props) => <figcaption className={codeTitleStyle} {...props} />,
};

export default MDXComponents;
