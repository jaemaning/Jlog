import { CategoryGroups } from "../model/model";
import { Posts } from "@/features/search-post/model/model";

export async function divideCategory(posts: Posts) {
    const categoryGroups : CategoryGroups = {
        All : [

        ]
    }

    posts.map((post)=>{
        categoryGroups["All"].push(
            {
                name : post.name,
                date : post.dateString,
                title : post.grayMatterData.title
            }
        )

        if (Object.keys(categoryGroups).includes(post.category)) {
            categoryGroups[post.category].push(
                {
                    name : post.name,
                    date : post.dateString,
                    title : post.grayMatterData.title
                }
            )
        } else {
            categoryGroups[post.category] = [
                {
                    name : post.name,
                    date : post.dateString,
                    title : post.grayMatterData.title
                }
            ]
        }
    })

    return categoryGroups
}