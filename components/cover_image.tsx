import Image from "next/image"
import Link from "next/link"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import smallImage from "../public/smallImage.png"
import mediumImage from "../public/mediumImage.png"
import largeImage from "../public/coderGIF.svg"
import extraLargeImage from "../public/extraLargeImage.png"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"

import ContactForm from "./contact_form"

import { CalendarDays, MailCheck } from "lucide-react"
 
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"

export function CoverImage() {
  return (
    <div className="flex min-h-screen bg-transparent relative bottom-[80px]">
  <div className="flex flex-1 flex-col justify-center px-8 py-8 md:px-12 lg:flex-none lg:px-24 lg:py-36">
    <div className="mx-auto w-full lg:max-w-6xl">
      <div className="mx-auto max-w-xl text-center lg:p-1 lg:text-left">
        <div>
          <span className="inline-flex items-center text-black"> <span className="font-mono text-sm" aria-hidden="true">MG</span><span className="ml-3 h-3.5 w-px bg-black"></span><span className="ml-3 text-base font-medium tracking-tight">Desarrollador</span> </span>
          <p className="font-display mt-8 text-4xl tracking-tighter text-black lg:text-5xl">Cultura digital, juntos</p>
          <p className="mt-4 max-w-xl text-lg tracking-tight text-gray-600">Me especializo en dar vida a aplicaciones y sitios web centrados en el usuario. Desde frontends hasta plataformas micro SaaS, podemos hacer realidad tu visión utilizando 
          <HoverCard>
      <HoverCardTrigger asChild>
        <Link href="/"> Next.js</Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>, Pipedream y Tailwind. Trabajemos juntos para construir la herramienta que querés. Escribime hoy para discutir tu proyecto!</p>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Dialog>
  <DialogTrigger>
    <Button>Contacto</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>GENIAL!</DialogTitle>
          <DialogDescription>
            
            Me encanta saber más sobre tu proyecto. Seguiremos el contacto por correo!
            
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <div className="grid grid-cols-1 gap-4 items-center">
  <Label htmlFor="name" className="text-left">
    Por favor completá tus datos
  </Label>
  <Input id="name" value="Tu nombre" className="col-span-3" />
</div>

        <DialogFooter className="flex sm:justify-content-start">
  <div className="w-full max-w-xs">
    <ContactForm />
  </div>
</DialogFooter>
        </div>
      
 
</DialogContent>


</Dialog>
        </div>
      </div>
    </div>
  </div>
  <div className="relative order-first hidden w-0 flex-1 bg-transparent lg:block">
    <div>
      <img className="absolute bottom-5 md:-ml-[50px] lg:ml-24 xl:ml-[100px] h-full w-full object-cover scale-[0.7]" src="/coderGIF.svg" alt="" />
    </div>
  </div>
</div>

  )
}
