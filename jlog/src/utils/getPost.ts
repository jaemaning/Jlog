import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostMatter, Post } from './postType';

export const parsePost = async (postDir: string) => {
  const files = fs.readdirSync(postDir);

  const posts = files.map((fileName) => {
    const filePath = path.join(postDir, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const graayMatterData = data as PostMatter

    return { graayMatterData, content };
  });

  return posts;
};
