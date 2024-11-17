'use client';

import Provider from '@/components/utils/MDXProvider';
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import MDXComponents from '../MDXcomponent/MDXComponent';
import './MDXContent.css'

interface MDXContentType {
    fn : string
}

const MDXContent : React.FC<MDXContentType> = ({ fn }) => {
  return (
    <Provider>
        <MDXRemote 
            source={fn}
            components={MDXComponents}
            options={{
                mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeCodeTitles, rehypePrism]
                }
            }}
        />
    </Provider>
  );
}

export default MDXContent