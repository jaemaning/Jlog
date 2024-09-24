type PostMatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  category: string;
  thumbnail: string;
};

type Post = PostMatter & {
  slug: string;
  content: string;
  readingMinutes: number;
  wordCount: number;
};

export type {PostMatter, Post}