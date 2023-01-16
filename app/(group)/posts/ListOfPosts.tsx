import { LikeButton } from "./LikeButton"
import Link from 'next/link'

const fetchPosts = () => {
  // {cache: "no-store"} tambien puede usarse para que no guarde en cache creo?
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      // Se usa para hacer fetch de datos cada 60 segundos
      revalidate: 60,
    }
  }).then((response) => response.json());
}

export async function ListOfPosts() {
  const posts: any = await fetchPosts();

  return (
    <>
      <h1 className="text-[32px] mb-[20px] text-center">Aqui mostramos los posts...</h1>
      {posts.slice(0, 2).map((post: any) => (
        <article className="max-w-[75ch] mb-[20px]" key={post.id}>
          <Link href={`posts/${post.id}`}>
            <div className="border-solid border-white border-[2px] mb-[10px]">
              <h2 className="text-[20px] text-[#09f]">{post.title}</h2>
              <p className="mb-[10px]">{post.body}</p>
            </div>
          </Link>
          <LikeButton id={post.id} />
        </article>
      ))}
    </>
  )
}