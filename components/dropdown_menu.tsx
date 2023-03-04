"use client"

import * as React from "react"
import next from "next"
import Image from "next/image"
import Link from "next/link"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import {
  ArrowBigRight,
  BoxIcon,
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
import { useTheme } from "next-themes"
import Balancer from "react-wrap-balancer"

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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { DemoIndicator } from "./demo_indicator"
import ImageComponent from "./imagecomponent"
import LatestRepo from "./latestRepo"
import VideoComponent from "./videocomponent"

export function Dropdown_menu() {
  const { theme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative bottom-[2.5px] hidden scale-110 p-1 hover:bg-slate-200 focus:ring-1 md:mt-1 md:mb-0.5 md:flex"
        >
          <Avatar>
            <AvatarImage src="/Avatar_Darker.png" className="" />
            <AvatarFallback>MG</AvatarFallback>
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
              <BoxIcon className="mr-2 h-4 w-4" />
              <span>Aplicaciones</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="overflow-visible">
                <DropdownMenuItem className="overflow-visible">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem className="overflow-visible">
                        <NavigationMenuTrigger className="dark:text-dracula-aro-200">
                          SaaS, E-commerce, Web...
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="overflow-visible">
                          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                              <NavigationMenuLink>
                                <Link
                                  href=""
                                  className="pointer-events-none relative top-12 flex h-full min-h-[250px] w-full select-none rounded-md no-underline outline-none focus:shadow-md"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  <div className="absolute inset-0 rounded-md bg-transparent opacity-30"></div>
                                  <div className="absolute inset-0">
                                    <ImageComponent />
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>

                            <ListItem
                              href="https://superuber.com/light-energy-museum-2/"
                              title="Micro-servicios"
                            >
                              SaaS a la medida de tu idea. Tu proyecto puede
                              incluir backend y dar servicios →
                            </ListItem>
                            <ListItem
                              href="https://superuber.com/light-energy-museum-2/"
                              title="E-commerce"
                            >
                              Ejemplo de diseño de UI e integración con
                              plataforma de pagos para tu proyecto online →
                            </ListItem>
                            <ListItem
                              href="https://superuber.com/light-energy-museum-2/"
                              title="Contenidos"
                            >
                              Un caso de integración con gerenciadores de
                              contenidos (CMS) rápidos y económicos →
                            </ListItem>
                            <ListItem
                              href="https://superuber.com/light-energy-museum-2/"
                              title=""
                            ></ListItem>
                            <ListItem
                              href="https://superuber.com/light-energy-museum-2/"
                              title="¿Quiénes y cómo?"
                              className="pointer-events-none"
                            >
                              Trabajo en un contexto interdisciplinario que
                              incluye diseño, editores y colegas Devs
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
              <Rotate3dIcon className="mr-2 h-4 w-4" />
              <span>Inmersivo</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="overflow-visible">
                <DropdownMenuItem className="overflow-visible">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem className="overflow-visible">
                        <NavigationMenuTrigger className="dark:text-dracula-aro-200">
                          Stack, objetivos, equipo...
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="overflow-visible">
                          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[400px] lg:grid-cols-[1fr_.75fr]">
                            <li className="row-span-2">
                              <NavigationMenuLink>
                                <Link
                                  href="https://superuber.com/light-energy-museum-2/"
                                  className="relative flex h-full min-h-[250px] w-full select-none flex-col justify-end rounded-md p-5 no-underline outline-none focus:shadow-md"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  <VideoComponent />
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <ListItem
                              href="https://superuber.com/light-energy-museum-2/"
                              title="Stack"
                              className="pointer-events-none"
                            >
                              Integración con Unity desde el entorno de creación
                              de sonido SuperCollider.
                            </ListItem>
                            <ListItem
                              href="https://superuber.com/light-energy-museum-2/"
                              title="Objetivos"
                              className="pointer-events-none"
                            >
                              Diseño de sonido e interactividad para eventos y
                              espacios que incluyen centralmente al usuario.
                            </ListItem>
                            <ListItem
                              href="https://superuber.com/light-energy-museum-2/"
                              title="¿Quiénes?"
                              className="pointer-events-none"
                            >
                              Trabajo junto a colegas y a estudios como
                              SuperUber, uno de los mayores compañías de diseño
                              interactivo en Brasil
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
              <WrenchIcon className="mr-2 h-4 w-4" />
              <span>Proyectos</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="overflow-visible">
                <DropdownMenuItem className="overflow-visible">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem className="overflow-visible">
                        <NavigationMenuTrigger className="dark:text-dracula-aro-200">
                          Lo que tengo más activo en GitHub
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="overflow-visible">
                          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                              <NavigationMenuLink>
                                <div className="relative bottom-3 left-12 h-full w-full overflow-visible bg-[url('/coderGIF.svg')] bg-contain bg-no-repeat"></div>
                              </NavigationMenuLink>
                            </li>
                            <li className="row-span-3">
                              <NavigationMenuLink>
                                <a
                                  className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                                  href="https://www.semanticscholar.org/paper/Designing-Creative-AI-Partners-with-COFI%3A-A-for-in-Rezwana-Maher/864b8521239d722f4fb8ffe17e32abf2cef6f202"
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      borderLeft: `2px solid ${
                                        theme === "dark" ? "white" : "black"
                                      }`,
                                      height: "50%",
                                      top: "15px",
                                    }}
                                    className="flex w-full items-center"
                                  >
                                    <div className="relative -top-4 ml-11 text-lg font-medium">
                                      Según mi API{" "}
                                    </div>
                                  </div>
                                  <div className="-top-8 ml-12 mb-2">
                                    <LatestRepo />
                                  </div>
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
