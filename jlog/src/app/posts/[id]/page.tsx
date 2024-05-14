import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from '.contentlayer/generated';

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
            <span>{post.category}</span>
            <MDXComponent />
        </div>
    );
};