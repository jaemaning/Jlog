import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from '.contentlayer/generated';
import Button from '@/components/atom/button/button';
import MDXComponents from '@/components/atom/MDXcomponent/MDXComponent'


export function generateStaticParams() {
  return allPosts.map((post) => ({
    id: post._raw.flattenedPath,
  }));
}

export function fetchPost(id: string) {
  const post = allPosts.find((p) => p._raw.flattenedPath === id);

  if (!post) {
    throw new Error(`Post with id ${id} not found`);
  }

  return post;
}

export default function PostDetailPage({ params }: { params: { id: string } }): JSX.Element {
    const post = fetchPost(params.id);

    const MDXComponent = useMDXComponent(post?.body.code);

    return (
        <div>
            <h1>{post.title}</h1>
            <div>
              {post.tags.map((postTag)=> {
                return <Button size='fit' border='thin' margin='small'>{postTag}</Button>
              })}
            </div>
            <MDXComponent components={MDXComponents} />
        </div>
    );
};