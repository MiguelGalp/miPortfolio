
import * as React from "react"
import Link from "next/link"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dropdown_mobile } from "./dropdown_mobile"
import { ArrowBigRightDash } from "@/components/icons"
import { ArrowRightSquare } from "lucide-react"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const IconComponent = siteConfig.icon;

  return (
    <div className="flex gap-6 md:gap-1">

      <ArrowBigRightDash />
      <ArrowBigRightDash />
      <ArrowBigRightDash />
      
  <span className="relative bottom-[1px]">portfolio miguel galperin</span>
      {items?.length ? (
        <nav className="hidden gap-6 lg:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-semibold text-slate-600 hover:text-slate-900 dark:text-dracula-nosferatu-100 sm:text-sm",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
      <div className="lg:hidden">
        <Dropdown_mobile />
      </div>
    </div>
  )
}


