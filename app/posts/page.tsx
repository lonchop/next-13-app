import { ListOfPosts } from "./ListOfPosts"

export default function PostsPage() {
  return (
    <>
      <h1 className="text-[32px] mb-[20px]">Aqui mostramos los posts...</h1>
      {/* @ts-expect-error Server Component */}
      <ListOfPosts />
    </>
  )
}