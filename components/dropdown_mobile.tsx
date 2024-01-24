

import * as React from "react"
import Link from "next/link"
import {
  Clapperboard,
  Clock,
  Cloud,
  CreditCard,
  CupSoda,
  Github,
  HomeIcon,
  Keyboard,
  LifeBuoy,
  LogOut,
  LucideWifi,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Rotate3d,
  Settings,
  ShoppingCart,

  User,
  UserPlus,
  Users,
  Video,
  Wrench,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DemoIndicator } from "./demo_indicator"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ForwardIcon } from "lucide-react"
import { LayoutGrid } from "lucide-react"
import { Database } from "lucide-react"
import VideoComponent from "./videocomponent"

export function Dropdown_mobile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative right-1 bottom-0 p-2 md:hidden"
        >
          <Avatar>
            <AvatarImage src="/AvatarMaker (1).png" className="dark:invert-[20%] dark:sepia-[0%] dark:saturate-[1822%] dark:hue-rotate-[188deg] dark:brightness-[3%] dark:contrast-[18%]" />
            <AvatarFallback>MG</AvatarFallback>
          </Avatar>

          <DemoIndicator className="left-12 -mt-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel className="flex">Portfolio</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <LayoutGrid className="mr-2 h-4 w-4" />
              <span>Contenidos</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal className="">
              <DropdownMenuSubContent className="">
                <ul className="grid">
                  <li
                    className="bg-cover bg-center"
                    style={{ backgroundImage: "url('/atx_mockup.png')" }}
                  >
                    <a
                      className="flex h-[400px] w-[200px] select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                      href="https://atlanticx.org"
                    >
                     
                    </a>
                  </li>
                </ul>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Database className="mr-2 h-4 w-4" />
              <span>Backend</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal className="">
              <DropdownMenuSubContent className="">
                <ul className="grid">
                  <li
                    className="bg-cover bg-center"
                    style={{ backgroundImage: "url('/miss_mockup.png')" }}
                  >
                    <a
                      className="flex h-[400px] w-[200px] select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                      href="https://miss-subtitulos.app"
                    >
                    
                    </a>
                  </li>
                </ul>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <HomeIcon className="mr-2 h-4 w-4" />
              <span>Servicios</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal className="">
              <DropdownMenuSubContent className="">
                <ul className="grid">
                  <li
                    className="bg-cover bg-center"
                    style={{ backgroundImage: "url('/muro_mockup.png')" }}
                  >
                    <a
                      className="flex h-[400px] w-[200px] select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                      href="https://casa-muro.vercel.app/"
                    >
                    
                    </a>
                  </li>
                </ul>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <ShoppingCart className="mr-2 h-4 w-4" />
              <span>E-commerce</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal className="">
              <DropdownMenuSubContent className="">
                <ul className="grid">
                  <li
                    className="bg-cover bg-center"
                    style={{ backgroundImage: "url('/mockup_revista.png')" }}
                  >
                    <a
                      className="flex h-[400px] w-[200px] select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                      href="https://latinoarts.super.site/"
                    >
                      
                    </a>
                  </li>
                </ul>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="flex">Proyectos</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Rotate3d className="mr-2 h-4 w-4" />
            <span>Inmersivo</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal className="">
            <DropdownMenuSubContent className="">
              <ul className="grid">
                <li>
                  <VideoComponent/>
                  <a
                    className="flex h-[400px] w-[200px] select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="https://atlanticx.org"
                  >
                    
                    <div className="mt-4 mb-2 text-lg font-medium text-slate-800">
                      Miss-subtitulos.app
                    </div>
                    <p className="text-sm leading-tight text-slate-900">
                      Un micro servicio SaaS que utiliza IA para generar
                      subtítulos
                    </p>
                  </a>
                </li>
              </ul>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
