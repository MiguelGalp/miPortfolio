
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
} from "lucide-react"

import { Label } from "@radix-ui/react-dropdown-menu"
import { Separator } from "@radix-ui/react-dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import { siteConfig } from "@/config/site"
import ContactForm from "@/components/contact_form"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DemoIndicator } from "./demo_indicator"
import Dropdown_menu from "./dropdown_menu"
import { Dialog, DialogTrigger, DialogContent } from "@radix-ui/react-dialog"



export function SiteHeader() {
  return (
    <header className="sticky z-10 top-2 md:top-2 dark:text-dracula-nosferatu-100">
      <div className="container flex h-16 items-center space-x-2 w-auto">
        
        <Dropdown_menu />
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "text-black dark:text-dracula-nosferatu-100",
                })}
              >
                <Icons.gitHub className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "text-black dark:text-dracula-nosferatu-100",
                })}
              >
                <Icons.twitter className="relative left-[1px] h-6 w-6 fill-current dark:fill-black-50" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <a
              href="/Miguel_Galperin_UI.pdf"
              rel="noopener noreferrer"
              download
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "text-black dark:text-dracula-nosferatu-100",
                })}
              >
                <Icons.user className="relative left-[.5px] h-6 w-6 fill-current dark:fill-black-50" />
                <span className="sr-only">CV</span>
              </div>
              </a>
            
            <ThemeToggle />
          </nav>
        </div>
        
      </div>
    </header>
  )
}
