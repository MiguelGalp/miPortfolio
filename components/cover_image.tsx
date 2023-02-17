import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import sin_cabeza_mobile from "../public/iPhone_13_mobile.png"
import sin_cabeza from "../public/ipad_new.png"

export function CoverImage() {
  return (
    <>
      <div className="flex h-full items-center justify-center md:mt-10 md:ml-[110px] lg:ml-[160px] xl:ml-[280px]">
        <AspectRatio ratio={16 / 9} className="hidden p-0 md:block">
          <Image
            src={sin_cabeza}
            alt="Foto de Galperin"
            className="mt-12 antialiased transition-all duration-500 ease-in-out first-line:rounded-md"
            fill
          />
        </AspectRatio>
      </div>
      <div className="md:hidden">
        <Image
          src={sin_cabeza_mobile}
          alt="Foto de Galperin"
          fill
          className="mt-10 rounded-md antialiased transition-all duration-500 ease-in-out"
        />
      </div>
      <style jsx>{`
        @media (min-height: 768px) and (orientation: portrait) {
          .md\:mt-10 {
            margin-top: 30%;
            transform: scale(1.5);
            margin-left: 20%;
          }
        }
      `}</style>
    </>
  )
}
