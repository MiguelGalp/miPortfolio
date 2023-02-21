import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import smallImage from "../public/smallImage.png"
import mediumImage from "../public/mediumImage.png"
import largeImage from "../public/coderGIF.svg"
import extraLargeImage from "../public/extraLargeImage.png"

export function CoverImage() {
  return (
    <div className="flex min-h-screen bg-transparent relative bottom-[100px]">
  <div className="flex flex-1 flex-col justify-center px-8 py-8 md:px-12 lg:flex-none lg:px-24">
    <div className="mx-auto w-full lg:max-w-6xl">
      <div className="mx-auto max-w-xl text-center lg:p-10 lg:text-left">
        <div>
          <span className="inline-flex items-center text-black"> <span className="font-mono text-sm" aria-hidden="true">MG</span><span className="ml-3 h-3.5 w-px bg-black"></span><span className="ml-3 text-base font-medium tracking-tight">Desarrollador</span> </span>
          <p className="font-display mt-8 text-4xl tracking-tighter text-black lg:text-5xl">Apps y webs, juntos</p>
          <p className="mt-4 max-w-xl text-lg tracking-tight text-gray-600">Escribime para pensar tu nueva herramienta. La hago en React, Next.js, Tailwind y en contextos que piensan en el usuario y las APIs.</p>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        </div>
      </div>
    </div>
  </div>
  <div className="relative order-first hidden w-0 flex-1 bg-transparent lg:block">
    <div>
      <img className="absolute inset-0 h-full w-full object-cover scale-75" src="/coderGIF.svg" alt="" />
    </div>
  </div>
</div>

  )
}
