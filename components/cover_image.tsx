import Image from "next/image"
import Link from "next/link"
import { Separator } from "@radix-ui/react-dropdown-menu"
import CurrentMonthYear from "./current_month"
import Themed_Image from "./themed_image"
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
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

const CoverImage = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse min-h-screen items-center justify-between max-w-6xl mx-auto lg:-mt-20 lg:pr-16 xl:pr-8">
      <div className="flex flex-1 flex-col justify-center">
        <div className="mx-auto w-full lg:max-w-xl">
          <div className="mx-auto max-w-lg text-center lg:text-left lg:mt-8 xl:mt-10">
            <div>
              <span className="inline-flex items-center text-black lg:mb-4 xl:mb-0">
                {" "}
                <span
                  className="font-mono text-sm dark:text-dracula-nosferatu-100"
                  aria-hidden="true"
                >
                  MG
                </span>
                <span className="ml-3 h-3.5 w-px bg-black dark:bg-slate-100"></span>
                <span className="ml-3 text-base font-medium tracking-tight dark:text-dracula-nosferatu-100">
                  Desarrollador
                </span>{" "}
              </span>
              <p className="font-display lg:-mt-2 xl:mt-2 lg:text-5xl tracking-tighter text-black dark:text-dracula-nosferatu-100">
                Cultura digital, juntos
              </p>
              <p className="mt-4 mx-auto lg:pr-2 xl:pr-0 lg:text-lg lg:leading-5 xl:leading-normal lg:tracking-tighter xl:tracking-tight text-gray-600 dark:text-dracula-nosferatu-200 mr-8">
                Tengo un estudio (junto con diseñadorxs amigxs) donde construyo objetos digitales pensando en la experiencia del usuario (UX) y en la interface (UI). Lo hago para
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="cursor-pointer inline lg:text-lg lg:leading-5 xl:leading-normal lg:tracking-tighter xl:tracking-tight text-gray-400 dark:text-dracula-nosferatu-600 pl-1 m-0">@atlantic.x</div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarImage src="/ATX_AVATAR.png" />
                        <AvatarFallback>ATX</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold"><Link href="https://www.instagram.com/atlantic.x">@atlantic.x</Link></h4>
                        <p className="text-sm">
                          Plataforma para escénicas. Becas para artistxs junto a <Link href="https://twitter.com/FundWilliams">@FundWilliams</Link>.
                        </p>
                        <div className="flex items-center pt-2">
                          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                          <span className="text-xs text-muted-foreground">
                            Actualizado en <CurrentMonthYear />
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>, y también podés escribirme, abajo. Trabajo con JavaScript y Python (React/Jinja).
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3 lg:flex-row lg:mt-5 xl:mt-6">
              <Dialog>
                <DialogTrigger className="z-50">
                  <Button className="dark:bg-dracula-nosferatu-300">Contacto</Button>
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
      <div className="flex flex-1 items-center -ml-20">
        <div className="lg:pl-48 xl:pl-36 relative lg:left-10 xl:left-6 dark:opacity-90">
          <Themed_Image />
        </div>
      </div>
    </div>
  )
}

export default CoverImage;