

import { CircleDot, Copyright } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="container">
      <div className="flex justify-center mb-2 ">
        <div className="flex flex-row items-center">
          <Copyright className="h-2 w-2 mr-2"/>
          <p className="text-center leading-normal tracking-tighter text-[#10182a] dark:text-dracula-nosferatu-100 md:text-left md:text-sm">
            {" "}
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
