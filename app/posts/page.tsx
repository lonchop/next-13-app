const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json());
}

export default async function PostsPage() {
  const posts: any = await fetchPosts();

  return (
    <>
      <h1 className="text-[32px] mb-[20px]">Aqui mostramos los posts...</h1>
      <section>
        {posts.slice(0, 15).map((post: any) => (
          <article className="max-w-[75ch] mb-[20px]" key={post.id}>
            <h2 className="text-[20px]">{post.title}</h2>
            <p className="">{post.body}</p>
          </article>
        ))}
      </section>
    </>
  )
}