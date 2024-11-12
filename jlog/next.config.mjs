import createMDX from '@next/mdx';
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    parseFrontmatter : true,
    remarkPlugins: [
      remarkGfm,
    ],
    rehypePlugins: [
      rehypeCodeTitles,
      rehypePrism,
      rehypeHighlight
    ],
    // providerImportSource를 추가
    providerImportSource: "@mdx-js/react"
  },
})

export default withVanillaExtract(withMDX(nextConfig));
