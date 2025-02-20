import { GetCategory, GetCategoryPosts } from "@/services/BlogService";

export const revalidate = 0;

export async function generateMetadata({ params }) {
    const ID = (await params).id;
    const category = await GetCategory(ID)
    return {
      title: `مقاله های دسته بندی ${category?.data?.name}`,
    }
  }

const CategoryPosts = async ({ params }) => {
    const ID = (await params).id;
    const posts = GetCategoryPosts(ID).then(res => res.data)
    return (
        <>
      <section className="container mt-4">
        <section className="flex flex-wrap">
          {posts?.data?.map((post) => (
            <section className="p-4" key={post.id}>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href={`/post/${post.id}`}>
                  <Image
                    className="rounded-t-lg"
                    src={post.image}
                    alt={post.title}
                  />
                </a>
                <div className="p-5">
                  <a href={`/post/${post.id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {post.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {post.body.substr(0, 60)}
                  </p>
                  <a
                    href={`/post/${post.id}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </section>
          ))}
        </section>
      </section>
        </>
    )
}

export default CategoryPosts;