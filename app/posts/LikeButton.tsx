"use client"
import { useState } from "react"

export function LikeButton({ id }: { id: any }) {
  const [liked, setLiked] = useState(false)
  return (
    <button className="w-auto" onClick={() => setLiked(!liked)}>
      <p className="text-[20px]">
        {liked ? "❤️" : "🖤"}
      </p>
    </button>
  )
}