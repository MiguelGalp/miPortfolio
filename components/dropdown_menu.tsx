"use client"

import * as React from "react"
import Link from "next/link"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import {
  ArrowBigRight,
  Cloud,
  CreditCard,
  Croissant,
  CupSoda,
  Github,
  Keyboard,
  LifeBuoy,
  LogIn,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  RadioIcon,
  Rotate3dIcon,
  Settings,
  User,
  UserPlus,
  Users,
  WifiIcon,
  WrenchIcon,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { DemoIndicator } from "./demo_indicator"

export function Dropdown_menu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative right-1 bottom-1 hidden p-1 hover:bg-slate-200 md:mt-1 md:mb-0.5 md:flex"
        >
          <Avatar>
            <AvatarImage src="/AvatarMaker (1).png" className="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <DemoIndicator className="left-10 -mt-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Mi trabajo</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Rotate3dIcon className="mr-2 h-4 w-4" />
              <span>Inmersivo</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="overflow-visible">
                <DropdownMenuItem className="overflow-visible">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem className="overflow-visible">
                        <NavigationMenuTrigger>
                          Túnel de partículas junto a SuperUber
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="overflow-visible">
                          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                              <NavigationMenuLink>
                                <Link
                                  href="https://superuber.com/light-energy-museum-2/"
                                  className="relative flex h-full w-full select-none flex-col justify-end rounded-md bg-[url('/Light4.png')] bg-cover p-5 no-underline outline-none focus:shadow-md"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                ></Link>
                              </NavigationMenuLink>
                            </li>
                            <ListItem
                              href="https://superuber.com/light-energy-museum-2/"
                              title="Stack"
                            >
                              Integración con Unity desde el entorno de creación
                              de sonido SuperCollider (junto a Leandro
                              Yabcowski)
                            </ListItem>
                            <ListItem
                              href="https://superuber.com/light-energy-museum-2/"
                              title="Proyecto"
                            >
                              Diseño de sonido e interactividad trackeando hasta
                              5 usarios en simultáneo
                            </ListItem>
                            <ListItem
                              href="https://superuber.com/light-energy-museum-2/"
                              title="¿Quiénes?"
                            >
                              Lo hicimos junto a SuperUber, uno de los mayores
                              estudios de diseño interactivo de Brasil
                            </ListItem>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <WifiIcon className="mr-2 h-4 w-4" />
              <span>Para la Web</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="overflow-visible">
                <DropdownMenuItem className="overflow-visible">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem className="overflow-visible">
                        <NavigationMenuTrigger>
                          Páginas en vivo
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="overflow-visible">
                          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                            <li className="row-span-3">
                              <NavigationMenuLink>
                                <a
                                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-[url('/atx_mockup.png')] bg-cover p-5 no-underline outline-none focus:shadow-md"
                                  href="/"
                                >
                                  <Icons.logo className="h-6 w-6 text-white" />
                                  <div className="mt-4 mb-2 text-lg font-medium text-white">
                                    Atlanticx
                                  </div>
                                  <p className="text-sm leading-tight text-white/90">
                                    Sitio responsivo. Notion como gerenciador
                                    CMS para un fácil manejo de los contenidos
                                  </p>
                                </a>
                              </NavigationMenuLink>
                            </li>
                            <li className="row-span-3">
                              <NavigationMenuLink>
                                <a
                                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-[url('/miss_mockup.png')] bg-cover p-5 no-underline outline-none focus:shadow-md"
                                  href="/"
                                >
                                  <Icons.logo className="h-6 w-6  text-slate-600" />
                                  <div className="mt-4 mb-2 text-lg font-medium  text-slate-600">
                                    Miss-Subtítulos
                                  </div>
                                  <p className="text-sm leading-tight  text-slate-600">
                                    SaaS para subtítulos automatizados con IA,
                                    desarrollo de Front y Backend
                                  </p>
                                </a>
                              </NavigationMenuLink>
                            </li>
                            <li className="row-span-3">
                              <NavigationMenuLink>
                                <a
                                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-rose-500 to-indigo-700 p-6 no-underline outline-none focus:shadow-md"
                                  href="/"
                                >
                                  <Icons.logo className="h-6 w-6 text-white" />
                                  <div className="mt-4 mb-2 text-lg font-medium text-white">
                                    shadcn/ui
                                  </div>
                                  <p className="text-sm leading-tight text-white/90">
                                    Beautifully designed components built with
                                    Radix UI and Tailwind CSS.
                                  </p>
                                </a>
                              </NavigationMenuLink>
                            </li>
                            <li className="row-span-3">
                              <NavigationMenuLink>
                                <a
                                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-rose-500 to-indigo-700 p-6 no-underline outline-none focus:shadow-md"
                                  href="/"
                                >
                                  <Icons.logo className="h-6 w-6 text-white" />
                                  <div className="mt-4 mb-2 text-lg font-medium text-white">
                                    shadcn/ui
                                  </div>
                                  <p className="text-sm leading-tight text-white/90">
                                    Beautifully designed components built with
                                    Radix UI and Tailwind CSS.
                                  </p>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <WrenchIcon className="mr-2 h-4 w-4" />
              <span>Proyectos</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="overflow-visible">
                <DropdownMenuItem className="overflow-visible">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem className="overflow-visible">
                        <NavigationMenuTrigger>
                          Audio espacial junto a SuperUber
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="overflow-visible">
                          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                              <NavigationMenuLink>
                                <a
                                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-rose-500 to-indigo-700 p-6 no-underline outline-none focus:shadow-md"
                                  href="/"
                                >
                                  <Icons.logo className="h-6 w-6 text-white" />
                                  <div className="mt-4 mb-2 text-lg font-medium text-white">
                                    shadcn/ui
                                  </div>
                                  <p className="text-sm leading-tight text-white/90">
                                    Beautifully designed components built with
                                    Radix UI and Tailwind CSS.
                                  </p>
                                </a>
                              </NavigationMenuLink>
                            </li>
                            <ListItem href="/docs" title="Introduction">
                              Re-usable components built using Radix UI and
                              Tailwind CSS.
                            </ListItem>
                            <ListItem
                              href="/docs/installation"
                              title="Installation"
                            >
                              How to install dependencies and structure your
                              app.
                            </ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Typography"
                            >
                              Styles for headings, paragraphs, lists...etc
                            </ListItem>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </DropdownMenuItem>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          rel="noopener noreferrer"
          target="_blank"
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
