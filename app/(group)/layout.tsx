export default function PostsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <p className="w-full bg-white text-[orange]">Lonchop Developer - Lonchop Developer - Lonchop Developer - Lonchop Developer</p>
      <div className="flex flex-col items-center">
        {children}
      </div>
    </>
  )
}
