import { LikeButton } from "./LikeButton"

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json());
}

export async function ListOfPosts() {
  const posts: any = await fetchPosts();

  return (
    posts.slice(0, 15).map((post: any) => (
      <article className="max-w-[75ch] mb-[20px]" key={post.id}>
        <div className="border-solid border-white border-[2px] mb-[10px]">
          <h2 className="text-[20px] text-[#09f]">{post.title}</h2>
          <p className="mb-[10px]">{post.body}</p>
        </div>
        <LikeButton id={post.id} />
      </article>
    ))
  )
}