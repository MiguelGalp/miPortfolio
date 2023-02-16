"use client"
import * as React from "react"
import Link from "next/link"

import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
    CupSoda,
    Clock,
    LucideWifi,
    Clapperboard,
    HomeIcon,
    ShoppingCart
  } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent
} from "@/components/ui/dropdown-menu"

import { siteConfig } from "@/config/site"
import { DemoIndicator } from "./demo_indicator"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"

export function Dropdown_mobile(){
    return(
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="p-2 relative right-1 bottom-0 md:hidden"
        >
          <Avatar>
  <AvatarImage src="/AvatarMaker (1).png" className="" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

<DemoIndicator className="left-10 -mt-2" />
        </Button>
      </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuLabel className="flex">Mis trabajos</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <LucideWifi className="mr-2 h-4 w-4" />
                <span>Web Atlanticx</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal className="">
                <DropdownMenuSubContent className="">
                <ul className="grid">
                <li className="bg-cover bg-center" style={{backgroundImage: "url('/atx_mockup.png')"}}>

                
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
                <li className="bg-cover bg-center" style={{backgroundImage: "url('/miss_mockup.png')"}}>

                
                  <a
                    className="flex h-[400px] w-[200px] select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="https://atlanticx.org"
                  >
                    <Icons.logo className="h-6 w-6 text-slate-800" />
                    <div className="mt-4 mb-2 text-lg font-medium text-slate-800">
                      Miss-subtitulos.app
                    </div>
                    <p className="text-sm leading-tight text-slate-900">
                      Un micro servicio SaaS que utiliza IA para generar subtítulos
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
                <span>Casa Muro</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal className="">
                <DropdownMenuSubContent className="">
                <ul className="grid">
                <li className="bg-cover bg-center" style={{backgroundImage: "url('/muro_mockup.png')"}}>

                
                  <a
                    className="flex h-[400px] w-[200px] select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="https://atlanticx.org"
                  >
                   
                    <div className="mt-4 mb-2 text-lg font-medium text-slate-900">
                     
                    </div>
                    <p className="text-sm leading-tight text-slate-900">
                      
                    </p>
                  </a>
                
              </li>
            
            </ul>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <ShoppingCart className="mr-2 h-4 w-4" />
                <span>Tienda MP</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal className="">
                <DropdownMenuSubContent className="">
                <ul className="grid">
                <li className="bg-cover bg-center" style={{backgroundImage: "url('/mockup_revista.png')"}}>

                
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
          <DropdownMenuItem>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Cloud className="mr-2 h-4 w-4" />
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
              }