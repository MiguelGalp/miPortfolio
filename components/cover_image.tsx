import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import smallImage from "../public/smallImage.png"
import mediumImage from "../public/mediumImage.png"
import largeImage from "../public/revista_super_3.svg"
import extraLargeImage from "../public/extraLargeImage.png"

export function CoverImage() {
  return (
    <>
      <div className="flex h-full max-w-[1000px] max-h-[55vh] items-center justify-center md:-mt-8 md:ml-[120px] lg:ml-[200px] xl:ml-[290px] ">
        <AspectRatio ratio={16 / 9} className="hidden p-0 md:block">
          <Image
            src={largeImage}
            alt="Foto de Galperin"
            className="mt-12 antialiased transition-all duration-500 ease-in-out first-line:rounded-md"
            layout="responsive"
            sizes="(min-width: 1024px) 500px, 50vw"
            width={largeImage.width}
            height={largeImage.height}
          />
        </AspectRatio>
      </div>
      <div className="md:hidden">
        <Image
          src={smallImage}
          alt="Foto de Galperin"
          layout="responsive"
          width={smallImage.width}
          height={smallImage.height}
          className="mt-10 rounded-md antialiased transition-all duration-500 ease-in-out"
        />
      </div>
      <style jsx>{`
        @media (min-height: 768px) and (orientation: portrait) {
          .md\:-mt-8 {
            margin-top: 17%;
            position: relative;
            left: 5%;
            transform: scale(1.2);
          }
        }
      `}</style>
    </>
  )
}
