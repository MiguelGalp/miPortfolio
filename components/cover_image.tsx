"use client"

import Image from "next/image"
import Link from "next/link"
import { Separator } from "@radix-ui/react-dropdown-menu"
import { CalendarDays } from "lucide-react"

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
import CurrentMonthYear from "./current_month"
import Themed_Image from "./themed_image"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

const CoverImage = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-between md:flex-row-reverse lg:-mt-20 lg:pr-16 xl:pr-8">
      <div className="flex flex-1 flex-col justify-center xl:-mt-2">
        <div className="mx-auto w-full lg:max-w-xl">
          <div className="mx-auto max-w-lg text-center lg:text-left xl:mt-10">
            <div>
              <span className="inline-flex items-center text-gray-600 lg:mb-4 xl:mb-0">
                <div className="ml-1 text-base font-medium tracking-tight dark:text-dracula-nosferatu-200 tracking-[-3px] scale-[0.9] mt-[0.9px]">
                  <span
                   
                  >
                    MG
                    
                  </span>
                </div>
                <span className="ml-3 h-3.5 w-px bg-gray-400 dark:bg-dracula-nosferatu-200"></span>
                <span className="ml-3 text-base font-medium tracking-tight dark:text-dracula-nosferatu-200">
                  Desarrollador
                </span>
              </span>
              <p className="font-display tracking-tighter text-black dark:text-dracula-nosferatu-200 lg:-mt-2 lg:text-5xl xl:mt-2">
                Cultura digital, juntos
              </p>
              <p className="mx-auto mt-4 mr-8 text-gray-600 dark:text-dracula-nosferatu-200 lg:pr-2 lg:text-lg lg:leading-5 lg:tracking-tighter xl:pr-0 xl:leading-normal xl:tracking-tighter">
                Tengo un estudio (junto con diseñadorxs amigxs) donde construyo
                objetos digitales pensando en la experiencia del usuario (UX) y
                en la interface (UI). Lo hago para
                <div className="relative inline-block">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="m-0 inline cursor-pointer text-gray-400 dark:text-dracula-nosferatu-600 lg:text-lg lg:leading-5 lg:tracking-tighter xl:leading-normal xl:tracking-tight">
                        &nbsp;@atlantic.x
                        <span className="inline text-gray-600 dark:text-dracula-nosferatu-200">
                          .
                        </span>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="z-50 w-80">
                      <div className="flex justify-between space-x-4">
                        <Avatar>
                          <AvatarImage src="/ATX_AVATAR.png" />
                          <AvatarFallback>ATX</AvatarFallback>
                        </Avatar>
                        <div className="space-y-0">
                          <h4 className="text-sm font-semibold">
                            <Link href="https://www.instagram.com/atlantic.x">
                              @atlantic.x
                            </Link>
                          </h4>
                          <p className="text-sm">
                            Plataforma para escénicas. Becas para artistxs junto
                            a{" "}
                            <Link href="https://twitter.com/FundWilliams">
                              @FundWilliams
                            </Link>
                            .
                          </p>
                          <div className="flex items-center pt-2">
                            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-muted-foreground text-xs">
                              Actualizado en <CurrentMonthYear />
                            </span>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
                Trabajo con JavaScript y Python (Flask/Jinja). Si te interesa
                que trabajemos juntos escribime.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3 lg:mt-5 lg:flex-row xl:mt-6">
              <Dialog>
                <DialogTrigger className="z-10">
                  <Button className="dark:bg-dracula-nosferatu-300">
                    Contacto
                  </Button>
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
      <div className="-ml-20 flex flex-1 items-center">
        <div className="relative dark:opacity-90 lg:left-12 lg:pt-10 lg:pl-44 xl:left-16 xl:pt-12 xl:pl-32">
          <Themed_Image width={450} height={450} />
        </div>
      </div>
    </div>
  )
}

export default CoverImage
