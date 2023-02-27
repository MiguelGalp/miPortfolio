"use client"

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
  Wrench,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
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

export function Dropdown_mobile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative right-1 bottom-0 p-2 md:hidden"
        >
          <Avatar>
            <AvatarImage src="/AvatarMaker (1).png" className="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <DemoIndicator className="left-10 -mt-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel className="flex">Para la Web</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <LucideWifi className="mr-2 h-4 w-4" />
              <span>CMS Mgmt.</span>
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
                      <Icons.logo className="h-6 w-6 text-slate-200" />
                      <div className="mt-4 mb-2 text-lg font-medium text-slate-200">
                        Sitio Atlanticx
                      </div>
                      <p className="text-sm leading-tight text-slate-200">
                        CMS desde Notion.so
                      </p>
                    </a>
                  </li>
                </ul>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Clapperboard className="mr-2 h-4 w-4" />
              <span>Micro Saas</span>
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
                      href="https://atlanticx.org"
                    >
                      <Icons.logo className="h-6 w-6 text-slate-800" />
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
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <HomeIcon className="mr-2 h-4 w-4" />
              <span>Reservas</span>
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
                      href="https://atlanticx.org"
                    >
                      <div className="mt-4 mb-2 text-lg font-medium text-slate-900"></div>
                      <p className="text-sm leading-tight text-slate-900"></p>
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
                      href="https://atlanticx.org"
                    >
                      <Icons.logo className="h-6 w-6 text-slate-100" />
                      <div className="mt-4 mb-2 text-lg font-medium text-slate-100">
                        Revista y Shop
                      </div>
                      <p className="text-sm leading-tight text-slate-900">
                        Web cultural, contenidos y radio en vivo
                      </p>
                    </a>
                  </li>
                </ul>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="flex">Software</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Rotate3d className="mr-2 h-4 w-4" />
            <span>Inmersivo</span>
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
                    href="https://atlanticx.org"
                  >
                    <Icons.logo className="h-6 w-6 text-slate-800" />
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
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Wrench className="mr-2 h-4 w-4" />
            <span>Proyectos</span>
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
                    href="https://atlanticx.org"
                  >
                    <Icons.logo className="h-6 w-6 text-slate-800" />
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
