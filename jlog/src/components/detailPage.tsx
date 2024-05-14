import {
    GetStaticPaths,
    GetStaticProps,
    InferGetStaticPropsType,
} from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from '.contentlayer/generated';

const PostDetailPage = ({
    post,
  }: InferGetStaticPropsType<typeof getStaticProps>) => {
    
  const MDXComponent = useMDXComponent(post?.body.code || '');

  return (
      <div>
        <h1>{post?.title}</h1> 
        <span>{post?.category}</span> 
        <MDXComponent />
      </div>
  );
};

export default PostDetailPage;

// SSG 렌더링을 사용하기 위한 getStaticPaths 함수 사용
export const getStaticPaths: GetStaticPaths = async () => {
return {
    paths: allPosts.map(({ _raw }) => ({
    params: {
        // 마크다운 파일의 파일명을 기반으로 id를 지정합니다.
        id: _raw.flattenedPath,
    },
    })),

    // 현재 등록된 글 이외의 제목이 전달될경우 404 처리
    fallback: false,
  };
};

// SSG 렌더링을 사용하기 위한 getStaticProps 함수 사용
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = String(params?.id || '');

  // 동적 id 파라미터를 통해서 파일명과 동일한 글을 찾아서 리턴합니다.
  const post = allPosts.find(({ _id }) => {
      return _id === postId;
  });

  return {
      props: {
      post,
      },
  };
};