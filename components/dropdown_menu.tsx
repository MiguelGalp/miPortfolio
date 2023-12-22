

import * as React from "react"
import next from "next"
import Image from "next/image"
import Link from "next/link"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"

import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cva } from "class-variance-authority"
import {
  ArrowBigRight,
  BoxIcon,
  ChevronsRightIcon,
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
import { HoverCardTrigger, HoverCardContent } from "@radix-ui/react-hover-card"
import { CalendarDays } from "lucide-react"
import { Separator } from "@radix-ui/react-dropdown-menu"

const HoverCard = ({ children, ...props }) => (
  <HoverCardPrimitive.Root openDelay={150} closeDelay={0} {...props}>
    {children}
  </HoverCardPrimitive.Root>
);

const CustomHoverCardContent = ({ children, ...props }) => (
  <HoverCardContent side={"right"} {...props}>
    {children}
  </HoverCardContent>
);

const CustomHoverCard = ({ children, ...props }) => {
  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div onClick={handleClick} style={{ display: 'inline-block' }}>
      <HoverCard {...props}>{children}</HoverCard>
    </div>
  );
};

const CustomListItem = ({ children, ...props }) => {
  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <ListItem onClick={handleClick} {...props}>
      {children}
    </ListItem>
  );
};

const CustomNavigationMenu = ({ children, ...props }) => {
  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <NavigationMenu onClick={handleClick} {...props}>
      {children}
    </NavigationMenu>
  );
};




export default function Dropdown_menu() {
  const { theme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative bottom-[2.5px] hidden md:flex scale-110 p-1 hover:bg-slate-200 focus:ring-1 md:mt-1 md:mb-0.5"
        >
          <Avatar>
            <AvatarImage src="/AvatarMaker (1).png" className="dark:invert-[20%] dark:sepia-[0%] dark:saturate-[1822%] dark:hue-rotate-[188deg] dark:brightness-[3%] dark:contrast-[18%]" />
            <AvatarFallback>MG</AvatarFallback>
          </Avatar>

          <DemoIndicator className="left-10 -mt-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Mi Portfolio</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <BoxIcon className="mr-2 h-4 w-4" />
              <span>Software</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="overflow-visible">
                <DropdownMenuItem className="overflow-visible">
                  <CustomNavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem className="overflow-visible">
                        <NavigationMenuTrigger className="dark:text-dracula-aro-200">
                          UX/UI, CMS, E-commerce, Web...
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="overflow-visible">
                          <ul className="grid gap-2 p-6 md:w-[500px] lg:w-[550px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                              <NavigationMenuLink>
                                <Link
                                  href=""
                                  className="pointer-events-none relative top-2 flex h-full min-h-[250px] w-full select-none rounded-md no-underline outline-none"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  <div className="absolute inset-0 rounded-md bg-transparent"></div>
                                  <div className="absolute inset-0">
                                    <ImageComponent src="/love_hero.png" alt="Imagen de mockup" />
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>

                            <CustomListItem

                              title="Diseño de UX/UI"
                            >

                              Gestión de contenidos y experiencias centradas en los usuarios.
                              <CustomHoverCard>
                                <CustomHoverCard>
                                  <HoverCardTrigger className="ml-1 hover:brightness-50">
                                    Ver un caso →
                                  </HoverCardTrigger>
                                  <CustomHoverCardContent className="w-[350px] backdrop-blur-3xl backdrop-contrast-125 bg-white/30 p-4 rounded-md shadow-md dark:bg-slate-800">
                                    <div className="flex justify-between space-x-4">
                                      <Avatar>
                                        <AvatarImage src="/ATX_AVATAR.png" />
                                        <AvatarFallback>ATX</AvatarFallback>
                                      </Avatar>
                                      <div className="space-y-1">
                                        <h4 className="text-sm font-semibold"><Link href={"https://instagram.com/atlantic.x"}>@atlantic.x</Link></h4>
                                        <p className="text-sm mb-4">
                                          Desarrollo del sitio de la ONG Atlanticx. Diseño (junto a <Link href={"https://ar.pinterest.com/doncorbi/"}>@DonCorbi</Link>). Gestión headless de contenidos, con trackeo persistente.
                                          Se utilizó el siguiente Stack: Tina CMS, GitHub, Next.js, Mux, Tailwind CSS
                                        </p>
                                        <div className="pt-4">
                                          <Link href={"https:atlanticx-2.vercel.app"}>
                                            <Image
                                              src="/ATX_PORTADA.png"
                                              alt="Portada ATX"
                                              width={500} // adjust as needed
                                              height={300} // adjust as needed
                                              objectFit="cover"
                                              className="rounded-md" 
                                              priority
                                            />
                                          </Link>
                                        </div>
                                        <div className="flex items-center pt-2">
                                          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                                          <span className="text-xs text-muted-foreground">
                                            Entregado Diciembre 2023
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </CustomHoverCardContent>
                                </CustomHoverCard>
                              </CustomHoverCard>
                            </CustomListItem>
                            <CustomListItem

                              title="E-commerce"
                            >
                              Desarrollo FullStack de soluciones rápidas y económicas para ventas online.
                              <CustomHoverCard>
                                <HoverCardTrigger className="ml-1">
                                  Ver un caso →
                                </HoverCardTrigger>
                                <CustomHoverCardContent className="w-[350px] backdrop-blur-3xl backdrop-contrast-125 bg-white/30 p-4 rounded-md shadow-md dark:bg-slate-800">
                                  <div className="flex justify-between space-x-4">
                                    <Avatar>
                                      <AvatarImage src="/LOGO_MP.png" />
                                      <AvatarFallback>MISS</AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-1">
                                      <h4 className="text-sm font-semibold"><Link href={"https://twitter.com/MissSubtitulos"}>@MissSubtitulos</Link></h4>
                                      <p className="text-sm mb-4">
                                        Desarrollo de backend, e-commerce y UX/UI para <Link href={"https://miss-subtitulos.app/"}>Miss-Subtítulos</Link>, un servicio (Saas) para generar y enviar subtítulos. El Stack utilizado: Next.js, PipeDream, DeepGramAI.
                                      </p>
                                      <div className="pt-4">
                                        <Link href={"https://miss-subtitulos.app"}>
                                          <Image
                                            src="/MISS-WEB.png"
                                            alt="Portada ATX"
                                            width={500} // adjust as needed
                                            height={300} // adjust as needed
                                            objectFit="cover"
                                            className="rounded-md"
                                            priority
                                          />
                                        </Link>
                                      </div>
                                      <div className="flex items-center pt-2">
                                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                                        <span className="text-xs text-muted-foreground">
                                          Entregado Marzo 2023
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </CustomHoverCardContent>
                              </CustomHoverCard>
                            </CustomListItem>
                            <CustomListItem

                              title="Datos"
                            >
                              Análisis y visualización de datos.
                              <CustomHoverCard>
                                <HoverCardTrigger className="">
                                  Ver un caso →
                                </HoverCardTrigger>
                                <CustomHoverCardContent className="w-[350px] backdrop-blur-3xl backdrop-contrast-125 bg-white/30 p-4 rounded-md shadow-md dark:bg-slate-800">
                                  <div className="flex justify-between space-x-4">

                                    <div className="space-y-1">
                                      <h4 className="text-sm font-semibold"><Link href={""}>@OdioOído</Link></h4>
                                      <p className="text-sm mb-4">
                                        Scrapeo de datos de redes para su visualización y análisis <Link href={"https://twitter-temperature.onrender.com/"}>Proyecto en desarrollo</Link>, con un objetivo educativo.
                                      </p>
                                      <div className="pt-4">
                                        <Link href={"https://twitter-temperature.onrender.com/"}>
                                          <Image
                                            src="/TEMP_2.png"
                                            alt="Portada ATX"
                                            width={500} // adjust as needed
                                            height={300} // adjust as needed
                                            objectFit="cover"
                                            className="rounded-md" 
                                            priority
                                          />
                                        </Link>
                                      </div>
                                      <div className="flex items-center pt-2">
                                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                                        <span className="text-xs text-muted-foreground">
                                          Entregado Marzo 2023
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </CustomHoverCardContent>
                              </CustomHoverCard>
                            </CustomListItem>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </CustomNavigationMenu>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Rotate3dIcon className="mr-2 h-4 w-4" />
              <span>Instalaciones</span>
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
                          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[550px] lg:grid-cols-[1fr_.75fr]">
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
                              className="pointer-events-none mt-2"
                            >
                              Unity + Resolume + SuperCollider. Armo equipos
                              para impulsar tu evento o instalación.
                            </ListItem>
                            <ListItem
                              href="https://superuber.com/light-energy-museum-2/"
                              title="Objetivos"
                              className="pointer-events-none -mt-6"
                            >
                              Me interesa diseñar el sonido y la interactividad
                              para incluir centralmente al usuario.
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
                          Estoy siempre activo en GitHub
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
                                      borderLeft: `2px solid ${theme === "dark" ? "white" : "black"
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
            "block select-none space-y-0 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
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
