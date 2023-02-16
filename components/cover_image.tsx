import Image from "next/image";
import sin_cabeza from "../public/sin_cabeza_blanco.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";



export function CoverImage() {
  return (
      <AspectRatio ratio={9 / 16} className="bg-dracula-aro-50 dark:bg-dracula-aro-900 sm:-mt-16 md:-mt-36 md:mr-50 lg:mr-56 max-w-[1104px] gradient-mask-b-10">
        <Image src={sin_cabeza} alt="Foto de Galperin" fill className="rounded-md object-cover" />
      </AspectRatio>
  
  );
}
