import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import sin_cabeza_mobile from "../public/iPhone_13_mobile.png"
import sin_cabeza from "../public/ipad_new.png"

export function CoverImage() {
  return (
    <>
      <AspectRatio ratio={9 / 16} className="hidden p-0 md:block">
        <Image
          src={sin_cabeza}
          alt="Foto de Galperin"
          className="mt-10 rounded-md object-cover transition-all duration-500 ease-in-out md:ml-[110px] lg:ml-[160px] xl:ml-[280px]"
        />
      </AspectRatio>
      <div className="md:hidden">
        <Image
          src={sin_cabeza_mobile}
          alt="Foto de Galperin"
          fill
          className="-mt-3 rounded-md transition-all duration-500 ease-in-out"
        />
      </div>
    </>
  )
}
