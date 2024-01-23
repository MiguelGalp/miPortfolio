import { NavItem } from "@/types/nav"
import { ArrowBigRightDash } from "@/components/icons";
import React from 'react';


interface SiteConfig {
  name: string
  icon: React.ComponentType
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    docs: string
  }
}


export const siteConfig: SiteConfig = {
  name: "Portfolio",
  icon: ArrowBigRightDash,
  description: "Portfolio de software",
  mainNav: [],
  links: {
    twitter: "https://twitter.com/miguel_galperin",
    github: "https://github.com/MiguelGalp?tab=repositories",
    docs: "https://ui.shadcn.com",
  },
}


