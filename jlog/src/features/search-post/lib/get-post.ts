import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostMatter, Post } from '@/features/search-post/model/model'
import { sync } from 'glob';
import readingTime from 'reading-time';
import dayjs from 'dayjs';
import { notFound } from 'next/navigation';

const BASE_PATH = '/src/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);


// 포스트 저장 위치 확인`
function getPostPaths(category? : string) {
  const path = category || '**'
  const postPaths = sync(`${POSTS_PATH}/${path}/*.mdx`)
  return postPaths;
}

// 포스트 필요 정보 합치기
async function parsePost (postPath: string): Promise<Post> {
  const postAbstract = await parsePostAbstract(postPath);
  const postDetail = await parsePostDetail(postPath);
  return {
    ...postAbstract,
    ...postDetail,
  };
};

// 포스트 uri 분석 정의
function parsePostAbstract(postPath: string) {
  const pathInfos = postPath
                      .replace(".mdx","")
                      .split('/')
  const leng = pathInfos.length
  const [category, name] = [pathInfos[leng-2], pathInfos[leng-1]]
  return { category, name }
}

// 포스트 상세 내용 정의
function parsePostDetail(postPath : string) {
  const fileContents = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(fileContents);
  const grayMatterData = data as PostMatter;
  const readingMinutes = Math.ceil(readingTime(content).minutes);
  const dateString = dayjs(grayMatterData.date).locale('ko').format('YYYY.MM.DD');
  return { grayMatterData, content, readingMinutes, dateString }
}


// 모든 포스트 목록 조회. 블로그 메인 페이지에서 사용
export async function getPostAll(category?: string): Promise<Post[]> {
  const postPaths = getPostPaths(category);
  const posts = await Promise.all(postPaths.map((postPath) => parsePost(postPath)));

  return posts;
};


// 단일 페이지 조회
export async function getPostDetail(category: string, name: string) {
  const decodedName = decodeURIComponent(name)
  const postPath = await sync(`${POSTS_PATH}/${category}/${decodedName}.mdx`)
  if (!Array.isArray(postPath) || postPath.length === 0) {
    return notFound()
  } else {
    const detail = await parsePost(decodeURIComponent(postPath[0]));
    return detail;
  }
}






// 모든 포스트 조회
// export const getPostAll = async () => {
//   const files : string[] = sync(`${BASE_PATH}/**/*.mdx`);

//   const posts = files.map((fileName) => {
//     const filePath = path.join(POSTS_PATH, fileName);
//     const fileContents = fs.readFileSync(filePath, 'utf8');
//     const { data, content } = matter(fileContents);
//     const grayMatterData = data as PostMatter
//     const domainFileName = fileName.split(".")[0]

//     return { domainFileName, grayMatterData, content };
//   });

//   return posts;
// };

// // 모든 포스트 카테고리 조회
// export const getCategoryPostLists = async (category: string) => {
//   const posts = await getPostAll();
//   const filteredPosts = posts.filter((post) => post.grayMatterData.category === category);
//   return filteredPosts;
// };

// // 단일 포스트 조회
// export const getPost = async (fn: string) => {
//   const files = fs.readdirSync(POSTS_PATH);
//   const fileName = files.find(file => file.split(".")[0] === fn);
  
//   if (!fileName) {
//     return notFound();
//   }

//   const filePath = path.join(POSTS_PATH, fileName);
//   const fileContents = fs.readFileSync(filePath, 'utf8');
//   const { data, content } = matter(fileContents);
//   const grayMatterData = data as PostMatter;

//   return { grayMatterData, content };
// };

// // 검색 포스트 조회
// export const searchPost = async (keyWord: string) => {
//   const files = fs.readdirSync(POSTS_PATH);

//   return files.reduce((acc, fileName) => {
//     const filePath = path.join(POSTS_PATH, fileName);
//     const fileContents = fs.readFileSync(filePath, 'utf8');
//     const { data, content } = matter(fileContents);
//     const grayMatterData = data as PostMatter;
//     const domainFileName = fileName.split(".")[0];

//     if (content.includes(keyWord) || grayMatterData.title.includes(keyWord)) {
//       acc.push({ domainFileName, grayMatterData, content });
//     }
//     return acc;
//   }, [] as Array<{ domainFileName: string, grayMatterData: PostMatter, content: string }>);
// }