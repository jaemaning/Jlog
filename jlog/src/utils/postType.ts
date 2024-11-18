type PostMatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  category: string;
  thumbnail: string;
};

type Post = {
  category : string;
  name : string;
  grayMatterData: PostMatter;
  content: string;
  readingMinutes: number;
  dateString: string;
}

type Posts = Post[]

export type {PostMatter, Post}