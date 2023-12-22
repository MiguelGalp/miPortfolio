
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "./footer"
import { Analytics } from "@vercel/analytics/react"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <Analytics />
      <SiteFooter />
    </>
  )
}
