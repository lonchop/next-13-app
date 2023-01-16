"use client"
// No es recomendable usar mucho el "use client"

import Marquee from "react-fast-marquee";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Marquee speed={80} className="w-full bg-white text-[orange]">Lonchop Developer - Lonchop Developer - Lonchop Developer - Lonchop Developer</Marquee>
      <div className="flex flex-col items-center">
        {children}
      </div>
    </>
  )
}
