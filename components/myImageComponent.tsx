"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect } from "react"

import styles from "./MyImageComponent.module.scss"

function MyImageComponent() {
  return (
    <Image
      width={500}
      height={1500}
      className={`absolute bottom-5 left-8 top-5 scale-[200%] object-contain safari_only`}
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
      height={1500}
      className="absolute bottom-5 left-8 top-5 scale-[200%] object-contain safari_only"
      src="/Wtf_Migue.png"
      alt=""
      priority
    />
  )
}


export default function MyImage() {
  const { theme } = useTheme()

  useEffect(() => {
    if (navigator.userAgent.indexOf("Safari") !== -1) {
      document.body.classList.add("safari")
    }
  }, [])

  return (
    <div className={`relative order-first -z-50 hidden flex-1 bg-transparent lg:top-16 lg:right-6 lg:block`}>
      <div className="flex items-center">
        {theme === "dark" ? <MyDarkImageComponent /> : <MyImageComponent />}
      </div>
    </div>
  )
}
