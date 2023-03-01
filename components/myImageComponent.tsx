"use client"

import Image from "next/image"
import { useTheme } from "next-themes"

export default function MyImageComponent() {
  const { theme } = useTheme()
  const borderColor = theme === "dark" ? "white" : "black"

  return (
    <div className="relative order-first hidden max-h-[400px] w-0 max-w-[500px] flex-1 scale-90 bg-transparent lg:top-16 lg:block">
      <div
        style={{
          position: "relative",
          borderRight: `2px solid ${borderColor}`,
          height: "30%",
          top: "100px",
        }}
        className="flex items-center"
      >
        <Image
          width={500}
          height={500}
          className="absolute bottom-5 left-8 top-5 h-full w-full scale-[280%] object-contain"
          src="/Miguel_Dos.png"
          alt=""
          priority
        />
      </div>
    </div>
  )
}
