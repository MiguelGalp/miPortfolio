"use client"

import Image from "next/image"
import Copia_de_Cagando from '../public/Copia_de_Cagando.png'
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function CoverImage() {
  return (
    <AspectRatio ratio={9 / 16} className="bg-slate-50 dark:bg-slate-800">
      <Image
        src={Copia_de_Cagando}
        alt="Photo by Alvaro Pinot"
        fill
        className="rounded-md object-cover"
      />
    </AspectRatio>
  )
}
