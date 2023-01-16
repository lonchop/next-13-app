import Link from 'next/link'

const fetchSinglePost = (id: any) => {
  console.log(id)
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    }
  }).then((response) => response.json());
}

export default async function Post(
  { params, children }: { params: any, children: any },
) {
  const { id } = params;
  const post: any = await fetchSinglePost(id);

  return (
    <article className="max-w-[75ch] mb-[20px]">
      <h1 className="text-[32px] mb-[20px] text-[#09f]">{post.title}</h1>
      <p className="mb-[10px]">{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  )
}