"use client"

import { CircleDot, Copyright } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="relative w-full mt-16 mb-6">
      <div className="flex flex-col items-center justify-center md:h-24 md:flex-row">
        <div className="flex flex-row items-center sm:px-2 md:px-8 md:flex-row md:gap-2">
          <Copyright className="h-3"/>
          <p className="text-center text-[10px] leading-normal tracking-tight text-slate-900 dark:text-slate-100 md:text-left md:text-sm">
            Portfolio de software de{" "}
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Miguel Galperin
            </a>
            , derivado del UI{" "}
            <a
              href={siteConfig.links.docs}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              SHADCN
            </a>
            . {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}
