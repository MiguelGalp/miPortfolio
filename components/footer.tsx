"use client"

import { CircleDot, Copyright } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="container">
      <div className="flex items-center justify-center mt-20 mb-5 md:mt-20 md:mb-10 lg:mt-10 lg:mr-10">
        <div className="flex flex-row items-center">
          <Copyright className="h-2"/>
          <p className="text-center text-[10px] leading-normal tracking-tight text-slate-900 dark:text-dracula-nosferatu-100 md:text-left md:text-sm">
            Portfolio de {" "}
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
