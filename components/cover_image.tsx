import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import sin_cabeza from "../public/ipad_new.png"

export function CoverImage() {
  return (
    <AspectRatio ratio={9 / 16} className="">
      <Image
        src={sin_cabeza}
        alt="Foto de Galperin"
        className="ml-[140px] mt-10 rounded-md object-cover"
      />
    </AspectRatio>
  )
}
