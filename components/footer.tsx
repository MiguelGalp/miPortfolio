"use client"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="container mb-10 w-full max-w-[1104px] lg:fixed lg:bottom-0 lg:mb-0">
      <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo className="h-8 w-8 md:h-6" />
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
            . &copy; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}
