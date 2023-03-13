"use client"

import { useEffect } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

import styles from "./MyImageComponent.module.scss"

function MyImageComponent() {
  return (
    <Image
      className={`absolute bottom-40 scale-[2] xl:ml-[4vw]`}
      src="/Wtf_Migue.png"
      priority
      alt="My image"
      layout="fixed"
      width={500}
      height={500}
      objectFit="contain"
    />
  )
}

function MyDarkImageComponent() {
  return (
    <Image
      className={`absolute bottom-36 scale-[2] xl:ml-[3vw]`}
      src="/Wtf_Migue.png"
      priority
      alt="My image"
      layout="fill"
      objectFit="contain"
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
      className={`relative -z-50 order-first hidden flex-col bg-transparent lg:right-12 lg:bottom-96 lg:flex lg:min-h-[1200px] lg:min-w-[450px] xl:min-w-[500px]`}
    >
      <div className="">
        {theme === "dark" ? <MyDarkImageComponent /> : <MyImageComponent />}
      </div>
    </div>
  )
}
