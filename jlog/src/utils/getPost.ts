import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const parsePost = async (postDir: string) => {
  const files = fs.readdirSync(postDir);

  const posts = files.map((fileName) => {
    const filePath = path.join(postDir, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return { data, content };
  });

  return posts;
};
