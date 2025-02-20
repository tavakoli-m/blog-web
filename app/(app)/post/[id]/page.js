import { GetCategory, GetCategoryPosts } from "@/services/BlogService";
import { GetPost } from "@/services/PostService";
import Image from "next/image";

export const revalidate = 0;

export async function generateMetadata({ params }) {
    const ID = (await params).id;
    const post = await GetPost(ID)
    return {
      title: post.data.title,
    }
  }

const Post = async ({ params }) => {
    const ID = (await params).id;
    const post = await GetPost(ID)
    return (
        <>
      <section className="container mt-4">
        <section className="flex flex-col">
          <h1>
            {post?.data.title}
          </h1>

          <Image src={post?.data.image} alt={post?.data?.title} />

          <p className="mt-4">
            {post?.data.body}
          </p>
        </section>
      </section>
        </>
    )
}

export default Post;