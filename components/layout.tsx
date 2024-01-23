"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "./footer"
import { Analytics } from "@vercel/analytics/react"
import { Button } from "./ui/button"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, height: '100%', width: '100%', zIndex: -1 }}>
        <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="/Background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}>
        <Button className="ml-6">Click Me</Button>
      </div>
      <SiteHeader />
      <main style={{ flex: 1 }}>{children}</main>
      <Analytics />
      <SiteFooter />
    </div>
  )
}

