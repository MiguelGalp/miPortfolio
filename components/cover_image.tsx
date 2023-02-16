import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import sin_cabeza from "../public/sin_cabeza_blanco.png"

export function CoverImage() {
  return (
    <AspectRatio
      ratio={9 / 16}
      className="md:mr-50 max-w-[1104px] bg-dracula-aro-50 gradient-mask-b-10 dark:bg-dracula-aro-900 dark:gradient-mask-t-50 md:-mt-36 lg:mr-56"
    >
      <Image
        src={sin_cabeza}
        alt="Foto de Galperin"
        fill
        className="rounded-md object-cover"
      />
    </AspectRatio>
  )
}
