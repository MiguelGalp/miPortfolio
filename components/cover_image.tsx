import Image from "next/image"
import Link from "next/link"
import { CalendarDays } from "lucide-react"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import largeImage from "../public/coderGIF.svg"
import extraLargeImage from "../public/extraLargeImage.png"
import mediumImage from "../public/mediumImage.png"
import smallImage from "../public/smallImage.png"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export function CoverImage() {
  return (
    <div className="relative top-20 z-0 mx-auto flex min-h-screen justify-center bg-transparent lg:min-h-full">
      <div className="flex flex-1 flex-col justify-center p-8 md:px-12 lg:flex-none">
        <div className="mx-auto w-full lg:max-w-xl">
          <div className="mx-auto max-w-lg text-center lg:p-1 lg:text-left">
            <div>
              <span className="inline-flex items-center text-black">
                {" "}
                <span className="font-mono text-sm" aria-hidden="true">
                  MG
                </span>
                <span className="ml-3 h-3.5 w-px bg-black"></span>
                <span className="ml-3 text-base font-medium tracking-tight">
                  Desarrollador
                </span>{" "}
              </span>
              <p className="font-display mt-8 text-4xl tracking-tighter text-black lg:text-5xl">
                Cultura digital, juntos
              </p>
              <p className="mt-4 max-w-xl text-lg tracking-tight text-gray-600">
                Me especializo en dar vida a aplicaciones y sitios web centrados
                en el usuario. Desde frontends hasta plataformas micro SaaS,
                podemos hacer realidad tu visión utilizando
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
                          The React Framework – created and maintained by
                          @vercel.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                , Pipedream y Tailwind. Trabajemos juntos para construir la
                herramienta que querés. Escribime hoy para discutir tu proyecto!
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Dialog>
                <DialogTrigger>
                  <Button>Contacto</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        value="Pedro Duarte"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input
                        id="username"
                        value="@peduarte"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
      <div className="relative order-first hidden w-0 max-w-[650px] flex-1  bg-transparent lg:block">
        <div>
          <Image
            width={500}
            height={500}
            className="absolute bottom-5 left-8 h-full w-full scale-125 object-contain"
            src="/coderGIF.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
