import Button from '@/components/atom/button/button';
import MDXComponents from '@/components/atom/MDXcomponent/MDXComponent'
import NameTag from '@/components/atom/nameTag/nameTag';
import { MDXRemote } from 'next-mdx-remote/rsc'
import BinarySearch from '@/../posts/BinarySearch12.mdx'
import { getPost } from '@/utils/getPost';

export default async function PostDetailPage({ params }: { params: { fn: string } }) {
  
  const post = await getPost(params.fn);

  return (
      <div>
        <article>
          <h1>{post.grayMatterData.title}</h1>
          <MDXRemote 
            source={post.content}
            components={MDXComponents}
          />
        </article>
        <NameTag></NameTag>
      </div>
  );
};