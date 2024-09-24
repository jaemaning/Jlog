import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostMatter, Post } from './postType';

const BASE_PATH = '/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// 모든 포스트 조회
export const getPostAll = async (postDir: string) => {
  const files = fs.readdirSync(POSTS_PATH);

  const posts = files.map((fileName) => {
    const filePath = path.join(POSTS_PATH, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const grayMatterData = data as PostMatter

    return { grayMatterData, content };
  });

  return posts;
};

export const getCategoryPostLists = async (postDir: string, category: string) => {
  const posts = await getPostAll(postDir);
  const filteredPosts = posts.filter((post) => post.grayMatterData.category === category);
  return filteredPosts;
};