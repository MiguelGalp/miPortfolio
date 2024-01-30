"use client"

import * as React from "react"
import { useState } from "react"
import next from "next"
import Image from "next/image"
import Link from "next/link"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import { HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import {
  ArrowBigRight,
  BoxIcon,
  CalendarDays,
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
import { ClipLoader } from "react-spinners"
import Balancer from "react-wrap-balancer"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
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

const HoverCard = ({ children, ...props }) => (
  <HoverCardPrimitive.Root openDelay={150} closeDelay={0} {...props}>
    {children}
  </HoverCardPrimitive.Root>
)

type SideType = "bottom" | "right" | "top" | "left" | undefined;

const CustomHoverCardContent = ({ children, ...props }) => {
  const [side, setSide] = React.useState<SideType>("bottom");
  const [sideOffset, setSideOffset] = React.useState<number | undefined>(0);
  const [transform, setTransform] = React.useState<string | undefined>("");
  const [style, setStyle] = React.useState<React.CSSProperties>({});

  React.useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 1280px)").matches) {
        setSide("right");
        setSideOffset(-25);
        setTransform("translateY(100px)");
        setStyle({
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(255, 255, 255, 0.7)"
        });
      } else {
        setSide("bottom");
        setSideOffset(0);
        setTransform("");
        setStyle({});
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially to set the state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HoverCardContent side={side} sideOffset={sideOffset} style={{...style, transform: transform}} {...props}>
      {children}
    </HoverCardContent>
  );
};

const CustomHoverCard = ({ children, ...props }) => {
  const handleClick = (event) => {
    event.stopPropagation()
  }

  return (
    <div onClick={handleClick} style={{ display: "inline-block" }}>
      <HoverCard {...props}>{children}</HoverCard>
    </div>
  )
}

const CustomListItem = ({ children, ...props }) => {
  const handleClick = (event) => {
    event.stopPropagation()
  }

  return (
    <ListItem onClick={handleClick} {...props}>
      {children}
    </ListItem>
  )
}

const CustomNavigationMenu = ({ children, ...props }) => {
  const handleClick = (event) => {
    event.stopPropagation()
  }

  return (
    <NavigationMenu onClick={handleClick} {...props}>
      {children}
    </NavigationMenu>
  )
}



export function Dropdown_menu({ toggleDropdown, isDropdownOpen }) {
  const handleOpen = () => {
    const videoElement = document.getElementById('myVideo');
    if (videoElement) {
      videoElement.classList.add('blur');
    }
    toggleDropdown();
  };

  const handleClose = () => {
    const videoElement = document.getElementById('myVideo');
    if (videoElement) {
      videoElement.classList.remove('blur');
    }
    toggleDropdown();
  };
  const [imageLoading, setImageLoading] = useState(true)

  // Simulate image loading delay
  setTimeout(() => {
    setImageLoading(false)
  }, 5000) // Adjust the delay as needed
  const { theme } = useTheme()
  return (
    <DropdownMenu onOpenChange={isOpen => isOpen ? handleOpen() : handleClose()}>
      <DropdownMenuTrigger asChild className="data-[state=open]:bg-pink">
        <Button
          variant="ghost"
          className="w-17 h-17 relative right-2 hidden scale-110 p-1 md:mt-8 md:flex"
        >
          <Avatar className="h-16 w-16">
            <AvatarImage
              src="/Gallery.png"
              className="relative top-1 h-16 w-16"
            />
            <AvatarFallback className="ml-[-1px] tracking-[-3px]">
              MG
            </AvatarFallback>
          </Avatar>

          <DemoIndicator className="left-12 -mt-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="hover:none">
              <span>Apps</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="overflow-visible">
                <DropdownMenuItem className="overflow-visible">
                  <CustomNavigationMenu open={true}>
                    <NavigationMenuList>
                      <NavigationMenuItem className="overflow-visible bg-transparent">
                        <NavigationMenuTrigger className="text-black">
                          Desarrollos con Python, Javascript, SQL
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="overflow-visible">
                          <ul className="grid grid-cols-[1fr,1fr] gap-0 p-3 md:w-[370px]">
                            <li className="-mr-2">
                              <CustomListItem title="Front">
                                <div className="mt-1 text-base font-semibold leading-4 tracking-tighter">
                                  Servicio de desarrollo de Frontend utilizando
                                  el framework, las librerías y el manejo de
                                  contenidos más adecuado para cada proyecto.
                                  <div className="mt-2">
                                    Para Atlanticx utilicé Next.js, Mux,
                                    Tailwind y Tina.
                                  </div>
                                </div>

                                <CustomHoverCard>
                                  <HoverCardTrigger className="hover:brightness-0">
                                    <div className="opacity-85 text-sm p-6 relative right-6 bottom-4 hover:opacity-50">
                                      Ver más
                                    </div>
                                  </HoverCardTrigger>
                                  <CustomHoverCardContent className="flex space-x-4 w-[650px] rounded-md p-4 bg-white/75 shadow-md">
                                    {/* Left Column */}
                                    <div className="flex flex-col justify-between space-y-4 w-1/2">
                                      <Avatar className="hidden">
                                        <AvatarImage src="/ATX_AVATAR.png" />
                                        <AvatarFallback>ATX</AvatarFallback>
                                      </Avatar>
                                      <div className="space-y-1">
                                        <h4 className="text-sm opacity-75">
                                          <Link href={"https://instagram.com/atlantic.x"} target="_blank">
                                            @atlantic.x
                                          </Link>
                                        </h4>
                                        <p className="mb-2 text-base font-semibold leading-4 text-black">
                                          Como Lead Web Developer de la ONG Atlanticx, realicé el plan y la ejecución de la nueva web.
                                          <span className="block mt-2">
                                            El diseño fue en colaboración, junto a{" "}
                                            <Link href={"https://ar.pinterest.com/doncorbi/"} target="_blank">
                                              @DonCorbi. La página integra el front a GitHub y permite el trackeo de versiones colaborativas persistentes.
                                            </Link>
                                          </span>
                                        </p>
                                        <div className="flex items-center pt-2">
                                          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                                          <span className="text-muted-foreground text-xs">
                                            Diciembre 2023
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    {/* Right Column */}
                                    <div className="flex flex-col items-center justify-center w-1/2">
                                      {imageLoading ? (
                                        <div className="flex h-32 items-center justify-center">
                                          <ClipLoader />{" "}
                                        </div>
                                      ) : (
                                        <Link href={"https://atlanticx.org"} target="_blank">
                                          <Image
                                            src="/Web_Atx_Wide_Inverted.png"
                                            alt="Portada ATX"
                                            width={500} // adjust as needed
                                            height={500} // adjust as needed
                                            objectFit="cover"
                                            className="rounded-md mt-3"
                                            priority
                                          />
                                        </Link>
                                      )}
                                    </div>
                                  </CustomHoverCardContent>

                                </CustomHoverCard>
                              </CustomListItem>
                            </li>
                            <li className="-mr-3">
                              <CustomListItem title="Back">
                                <div className="mt-1 text-base font-semibold leading-4 tracking-tighter">
                                  Desarrollo FullStack con Python
                                  (Django/Flask/Jinja) y Htmx. Hago MPVs y estoy
                                  estudiando Data Science de manera autónoma.
                                </div>
                                <CustomHoverCard>
                                  <HoverCardTrigger className="hover:brightness-0">
                                    <div className="opacity-85 text-sm p-6 relative right-6 bottom-4 hover:opacity-50">
                                      Ver más
                                    </div>
                                  </HoverCardTrigger>
                                  <CustomHoverCardContent
                                    className="w-[550px] rounded-md p-4 shadow-md"
                                    sideOffset={0}
                                  >
                                    <div className="flex space-x-4">
                                      {/* Left Column */}
                                      <div className="flex flex-col justify-between space-y-4 w-1/2">
                                        <Avatar className="hidden">
                                          <AvatarImage src="/Avatar_Opio_2.png" />
                                          <AvatarFallback>OO</AvatarFallback>
                                        </Avatar>
                                        <div className="space-y-1">
                                          <h4 className="text-sm text-sm opacity-75 mt-10">
                                            <Link href={"https://twitter-temperature.onrender.com/"} target="_blank">
                                              @OpioDeLosPueblos
                                            </Link>
                                          </h4>
                                          <p className="mb-4 text-base font-semibold font-semibold leading-4 tracking-tighter">
                                            El proyecto{" "}
                                            <Link href={"https://twitter-temperature.onrender.com/"} target="_blank">
                                              {" "}
                                              El Opio de los Pueblos
                                            </Link>{" "}
                                            será lanzado próximamente en{" "}
                                            <Link href={"https://twitter-temperature.onrender.com/"} target="_blank">
                                              Frontend Café
                                            </Link>
                                            , donde soy mentor, como un proyecto OSS.
                                            <span className="block mt-2">
                                              El MVP linkeado abajo tiene como objetivo generar métricas de
                                              Twitter/X en tiempo real y utilizando categorías LDA (Latent
                                              Dirichlet allocation).
                                            </span>
                                          </p>
                                          <div className="flex items-center pt-2">
                                            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                                            <span className="text-muted-foreground text-xs">En proceso</span>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Right Column */}
                                      <div className="flex flex-col items-center justify-center w-1/2">
                                        {imageLoading ? (
                                          <div className="flex h-32 items-center justify-center">
                                            <ClipLoader />{" "}
                                          </div>
                                        ) : (
                                          <Link href={"https://twitter-temperature.onrender.com/"} target="_blank">
                                            <Image
                                              src="/Metricas.png"
                                              alt="Portada ATX"
                                              width={500} // adjust as needed
                                              height={500} // adjust as needed
                                              objectFit="cover"
                                              className="rounded-md mt-12"
                                              priority
                                            />
                                          </Link>
                                        )}
                                      </div>
                                    </div>

                                  </CustomHoverCardContent>
                                </CustomHoverCard>
                              </CustomListItem>
                            </li>
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
              <span>Sonido</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="overflow-visible">
                <DropdownMenuItem className="overflow-visible">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem className="overflow-visible">
                        <NavigationMenuTrigger className="font-semibold text-black">
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
              <span>Cosas</span>
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
            "block select-none space-y-0 rounded-md p-3 leading-none no-underline outline-none transition-colors focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-base leading-[0.9rem] text-black dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
