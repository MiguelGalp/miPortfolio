"use client"

import Image from "next/image"
import { useTheme } from "next-themes"

function MyImageComponent() {
  return (
    <Image
      width={500}
      height={500}
      className="absolute bottom-5 left-8 top-5 h-full w-full scale-[730%] object-contain"
      src="/Wtf_Migue.png"
      alt=""
      priority
    />
  )
}

function MyDarkImageComponent() {
  return (
    <Image
      width={500}
      height={500}
      className="absolute bottom-5 left-8 top-5 h-full w-full scale-[730%] object-contain"
      src="/Wtf_Migue.png"
      alt=""
      priority
    />
  )
}

export default function MyImage() {
  const { theme } = useTheme()

  return (
    <div className="relative order-first -z-50 hidden max-h-[400px] w-0 max-w-[500px] flex-1 scale-90 bg-transparent lg:top-16 lg:right-2 lg:block">
      <div
        style={{
          position: "relative",
          borderRight: `2px solid ${theme === "dark" ? "white" : "black"}`,
          height: "30%",
          top: "100px",
        }}
        className="flex items-center"
      >
        {theme === "dark" ? <MyDarkImageComponent /> : <MyImageComponent />}
      </div>
    </div>
  )
}
