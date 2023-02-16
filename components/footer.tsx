"use client"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="container fixed bottom-0 right-0 w-full">
      <div className="flex  flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo className="h-6 w-6" />
          <p className="text-center text-sm leading-loose text-slate-900 dark:text-slate-100 md:text-left">
            Desarrollado por{" "}
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
              shadcn
            </a>
            . &copy; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}
