import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostMatter, Post } from './postType';
import { notFound } from 'next/navigation';

const BASE_PATH = '/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// 모든 포스트 조회
export const getPostAll = async () => {
  const files = fs.readdirSync(POSTS_PATH);

  const posts = files.map((fileName) => {
    const filePath = path.join(POSTS_PATH, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const grayMatterData = data as PostMatter
    const domainFileName = fileName.split(".")[0]

    return { domainFileName, grayMatterData, content };
  });

  return posts;
};

// 모든 포스트 카테고리 조회
export const getCategoryPostLists = async (category: string) => {
  const posts = await getPostAll();
  const filteredPosts = posts.filter((post) => post.grayMatterData.category === category);
  return filteredPosts;
};

// 단일 포스트 조회
export const getPost = async (fn: string) => {
  const files = fs.readdirSync(POSTS_PATH);
  const fileName = files.find(file => file.split(".")[0] === fn);
  
  if (!fileName) {
    return notFound();
  }

  const filePath = path.join(POSTS_PATH, fileName);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const grayMatterData = data as PostMatter;

  return { grayMatterData, content };
};

// 검색 포스트 조회
export const searchPost = async (keyWord: string) => {
  const files = fs.readdirSync(POSTS_PATH);

  return files.reduce((acc, fileName) => {
    const filePath = path.join(POSTS_PATH, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const grayMatterData = data as PostMatter;
    const domainFileName = fileName.split(".")[0];

    if (content.includes(keyWord) || grayMatterData.title.includes(keyWord)) {
      acc.push({ domainFileName, grayMatterData, content });
    }
    return acc;
  }, [] as Array<{ domainFileName: string, grayMatterData: PostMatter, content: string }>);
}