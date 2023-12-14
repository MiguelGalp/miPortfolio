"use client"

import { CircleDot, Copyright } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="relative w-full lg:bottom-[15vh] md:top-[10vh] ">
      <div className="flex flex-col items-center justify-center gap-4 md:mt-2 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Copyright className="h-6 w-6 md:h-4"/>
          <p className="text-center text-[10px] leading-normal text-slate-900 dark:text-slate-100 md:text-left md:text-sm">
            Portfolio de software de{" "}
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Miguel Galperin
            </a>
            , el UI es derivado de{" "}
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
