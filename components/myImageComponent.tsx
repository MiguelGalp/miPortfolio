"use client"

import { useEffect } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

import styles from "./MyImageComponent.module.scss"

function MyImageComponent() {
  return (
    <Image
      height={5612}
      width={4544}
      className={`object-fit safari_only absolute bottom-5 left-8 scale-150`}
      src="/Wtf_Migue.png"
      alt=""
      priority
    />
  )
}

function MyDarkImageComponent() {
  return (
    <Image
      height={5612}
      width={4544}
      className={`object-fit safari_only absolute bottom-5 left-8 scale-150`}
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
    <div
      className={`relative -z-50 order-first hidden flex-1 bg-transparent md:min-h-[1200px] lg:bottom-80 lg:right-6 lg:block`}
    >
      <div className="flex items-center">
        {theme === "dark" ? <MyDarkImageComponent /> : <MyImageComponent />}
      </div>
    </div>
  )
}
