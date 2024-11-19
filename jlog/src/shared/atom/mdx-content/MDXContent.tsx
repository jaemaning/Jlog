'use client';

import { MdxProvider } from '@/app/_providers';
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'
import remarkGfm from 'remark-gfm';
import MDXComponents from '../mdx-component/MDXComponent';
import './MDXContent.css'

interface MDXContentType {
    postName : string
}

const MDXContent : React.FC<MDXContentType> = ({ postName }) => {
  return (
    <MdxProvider>
        <MDXRemote 
            source={postName}
            components={MDXComponents}
            options={{
                mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeCodeTitles, rehypePrism]
                }
            }}
        />
    </MdxProvider>
  );
}

export default MDXContent