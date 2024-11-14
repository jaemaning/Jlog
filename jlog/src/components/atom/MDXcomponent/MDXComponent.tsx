import React from 'react';
import { 
  preStyle, 
  codeTitleStyle, 
  codeStyle,
  headingStyle,
  paragraphStyle,
  listStyle,
  linkStyle,
  blockquoteStyle,
  tableStyle,
  imageStyle,
  strongStyle
} from './MDXComponent.css';

// Props 타입 정의
type CommonProps<T extends keyof JSX.IntrinsicElements> = React.ComponentPropsWithoutRef<T>;

const MDXComponents = {
  pre: (props : CommonProps<'pre'>) => <pre className={preStyle} {...props} />,
  code: (props : CommonProps<'code'>) => <code className={codeStyle} {...props} />,
  figcaption: (props : CommonProps<'figcaption'>) => <figcaption className={codeTitleStyle} {...props} />,
  strong: (props : CommonProps<'strong'>) => <strong className={strongStyle} {...props} />,
  // 헤딩 컴포넌트
  h1: (props: CommonProps<'h1'>) => <h1 className={headingStyle.h1} {...props} />,
  h2: (props: CommonProps<'h2'>) => <h2 className={headingStyle.h2} {...props} />,
  h3: (props: CommonProps<'h3'>) => <h3 className={headingStyle.h3} {...props} />,
  h4: (props: CommonProps<'h4'>) => <h4 className={headingStyle.h4} {...props} />,

  // 텍스트 컴포넌트
  p: (props: CommonProps<'p'>) => <p className={paragraphStyle} {...props} />,
  
  // 리스트 컴포넌트
  ul: (props: CommonProps<'ul'>) => <ul className={listStyle.unordered} {...props} />,
  ol: (props: CommonProps<'ol'>) => <ol className={listStyle.ordered} {...props} />,
  li: (props: CommonProps<'li'>) => <li className={listStyle.item} {...props} />,

  // 링크 컴포넌트
  a: (props: CommonProps<'a'>) => <a className={linkStyle} {...props} />,

  // 블록쿼트 컴포넌트
  blockquote: (props: CommonProps<'blockquote'>) => (
    <blockquote className={blockquoteStyle} {...props} />
  ),
  // 테이블 컴포넌트
  table: (props: CommonProps<'table'>) => <table className={tableStyle.table} {...props} />,
  th: (props: CommonProps<'th'>) => <th className={tableStyle.header} {...props} />,
  td: (props: CommonProps<'td'>) => <td className={tableStyle.cell} {...props} />,

  // 이미지 컴포넌트
  img: (props: CommonProps<'img'>) => <img className={imageStyle} {...props} />,
};

export default MDXComponents;
