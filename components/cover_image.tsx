import Image from "next/image"
import Link from "next/link"
import { Separator } from "@radix-ui/react-dropdown-menu"
import Balancer from "react-wrap-balancer"

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
import MyImage from "./myImageComponent"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export function CoverImage() {
  return (
    <div className="0 relative z-0 mx-auto flex min-h-screen justify-center bg-gradient-to-b from-[#dfe1ed] to-white dark:bg-none lg:relative lg:top-[7vh] lg:right-8 lg:min-h-full lg:bg-none xl:top-[10vh]">
      <div className="flex flex-1 flex-col p-8 md:px-8 lg:flex-none">
        <div className="mx-auto w-full scale-90 lg:max-w-xl">
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
              <Balancer className="mt-4 max-w-xl text-lg tracking-tight text-gray-600 dark:text-dracula-aro-200">
              ¿Querés usar la IA para tus redes en un workflow documentable?
                ¿Mejores y más servicios y contenidos para tus usuarios?
                ¿Necesitás impulsar tu proyecto y tu comunidad?{" "}
                <p className="relative top-[1.5px] inline text-xl">⇢</p>{" "}
                Desarrollo arquitecturas de micro-servicios utilizando un stack
                centrado en
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Link href="">
                      {" "}
                      <span className="relative z-50 -m-5 inline-block p-5 opacity-50">
                        Next.js
                      </span>
                    </Link>
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
                &nbsp;y en tus necesidades. Trabajemos juntos para construir la
                herramienta que querés. Escribime hoy para discutir tu proyecto!
              </Balancer>
            </div>
            <div className="mt-10 flex flex-col gap-3 md:max-md:flex-row lg:flex-row">
              <Dialog>
                <DialogTrigger className="z-50">
                  <Button className=" dark:bg-dracula-aro-50">Contacto</Button>
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
                      <div className="-ml[1px] mb-16 -mt-8 w-full">
                        <div className="mb-[-60px] rounded-md bg-gray-100 p-6 dark:bg-dracula-aro-200">
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
      <MyImage />
    </div>
  )
}
