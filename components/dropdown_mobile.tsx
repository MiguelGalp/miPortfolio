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
    Clock
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
          
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserPlus className="mr-2 h-4 w-4" />
                <span>Invite users</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal className="">
                <DropdownMenuSubContent className="">
                <ul className="grid">
                <li className="bg-cover bg-center" style={{backgroundImage: "url('/NuevoScreenShot_Atlanticx.png')"}}>

                
                  <a
                    className="flex h-[400px] w-[200px] select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="https://atlanticx.org"
                  >
                    <Icons.logo className="h-6 w-6 text-slate-900" />
                    <div className="mt-4 mb-2 text-lg font-medium text-slate-900">
                      Sitio Atlanticx
                    </div>
                    <p className="text-sm leading-tight text-slate-900">
                      CMS desde Notion.so
                    </p>
                  </a>
                
              </li>
            
            </ul>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              <Plus className="mr-2 h-4 w-4" />
              <span>New Team</span>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
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