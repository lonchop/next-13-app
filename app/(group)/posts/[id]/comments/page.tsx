import Image from 'next/image'

const fetchComments = async (id: any) => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  // throw new Error("Error al cargar los datos")

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    }
  }).then((response) => response.json());
}


export default async function Post({ params }: { params: any }) {
  const { id } = params;
  const comments: any = await fetchComments(id);
  return (
    <ul className="bg-[#2b2b2b]">
      {comments.slice(0, 2).map((comment: any) => (
        <li className="p-[20px]" key={comment.id}>
          <div className="mb-[20px]">
            <Image width={80} height={80} alt={comment.email} src={`https://robohash.org/${comment.email}`} />
            <h2 className="mb-[10px]">{comment.name}</h2>
            <small>{comment.body}</small>
          </div>
          <div className="border-b-[1px] border-white"></div>
        </li>
      ))}
    </ul>
  )
}