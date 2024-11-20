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

type SearchState = {
    isSearchOpen: boolean;
    toggleSearch: ()=>void;
}

export type { PostMatter, Post, Posts, SearchState }