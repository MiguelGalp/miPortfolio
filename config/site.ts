import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    docs: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Miguel Galperin ⤑",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [],
  links: {
    twitter: "https://twitter.com/miguel_galperin",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
