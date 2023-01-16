import { ListOfPosts } from "./ListOfPosts"

export default function PostsPage() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <ListOfPosts />
    </>
  )
}