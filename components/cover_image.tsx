import Image from "next/image"
import Link from "next/link"
import { Separator } from "@radix-ui/react-dropdown-menu"

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
import ContactForm from "./contact_form"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export function CoverImage() {
  return (
    <div className="relative z-0 mx-auto flex min-h-screen justify-center bg-transparent bg-gradient-to-b from-blue-200 to-white lg:relative lg:top-[2.5rem] lg:min-h-full lg:bg-none">
      <div className="flex flex-1 flex-col justify-center p-8 md:px-12 lg:flex-none">
        <div className="mx-auto w-full lg:max-w-xl">
          <div className="mx-auto max-w-lg text-center lg:p-1 lg:text-left">
            <div>
              <span className="inline-flex items-center text-black">
                {" "}
                <span
                  className="font-mono text-sm dark:text-dracula-aro-100"
                  aria-hidden="true"
                >
                  MG
                </span>
                <span className="ml-3 h-3.5 w-px bg-black"></span>
                <span className="ml-3 text-base font-medium tracking-tight dark:text-dracula-aro-100">
                  Desarrollador
                </span>{" "}
              </span>
              <p className="font-display mt-8 text-4xl tracking-tighter text-black dark:text-dracula-aro-50 lg:text-5xl">
                Cultura digital, juntos
              </p>
              <p className="mt-4 max-w-xl text-lg tracking-tight text-gray-600 dark:text-dracula-aro-200">
                Me especializo en dar vida a aplicaciones y sitios web centrados
                en el usuario. Desde frontends hasta plataformas micro SaaS,
                podemos hacer realidad tu visión utilizando un Stack moderno y económico.
                Trabajemos juntos para construir la herramienta que querés. Escribime hoy para discutir tu proyecto!
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Dialog>
                <DialogTrigger className="z-50">
                  <Button className="dark:bg-dracula-aro-50">Contacto</Button>
                </DialogTrigger>
                <div className="flex items-center justify-center bg-white">
                  <DialogContent className="sm:max-w-[425px]">
                    <div className="flex space-x-6">
                      <div className="space-y-1">
                        <h4 className="text-sm font-medium leading-none">
                          Miguel Galperin
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Desarrollador
                        </p>
                      </div>
                      <Avatar className="bottom-[2px]">
                        <AvatarImage src="/Avatar_Darker.png" className="" />
                        <AvatarFallback>MG</AvatarFallback>
                      </Avatar>
                    </div>
                    <Separator className="text-black" />
                    <div className="grid gap-4">
                      <div className="grid grid-cols-1 items-center gap-4">
                        <Label htmlFor="name" className=""></Label>
                      </div>
                      <div className="-ml[1px] mb-16 w-full">
                        <div className="rounded-md bg-gray-100 p-6">
                          <ContactForm />
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </div>
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
            priority={true}
          />
        </div>
      </div>
    </div>
  )
}