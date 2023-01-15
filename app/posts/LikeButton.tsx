"use client"
import { useState } from "react"

export function LikeButton({ id }: { id: any }) {
  const [liked, setLiked] = useState(false)
  return (
    <div className="w-[100%] flex justify-center mb-[10px]">
      <button className="w-[30px] h-[30px] bg-white flex justify-center items-center rounded-[100%]" onClick={() => setLiked(!liked)}>
        <p className="text-[20px]">
          {liked ? "❤️" : "🖤"}
        </p>
      </button>
    </div>
  )
}