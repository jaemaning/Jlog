import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import highlight from 'rehype-highlight';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeImgSize from './rehype-img-size';
import MDXComponents from './src/components/atom/MDXcomponent/MDXComponent'


export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`, // mdx 파일경로 패턴
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    date: {
      type : 'date',
      required: true,
    },
    thumbnail: {
      type: 'string',
      required: false,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
  },
}));

const rehypeOptions = {
  theme: 'slack-dark',
  keepBackground: true,
};

const contentSource = makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'github-dark', // 코드작성시 적용할 테마
        },
      ],
      highlight,
      rehypeImgSize,
    ],
    components: MDXComponents,
  },
});

export default contentSource;
