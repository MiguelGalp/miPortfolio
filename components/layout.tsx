"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "./footer"
import { Analytics } from "@vercel/analytics/react"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { Separator } from "./ui/separator"
import ContactForm from "./contact_form"

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
        <Dialog>
          <DialogTrigger className="z-10 relative left-5">
            <Button className="text-base text-bold text-slate-100 bg-opacity-50">
              Contacto
            </Button>
          </DialogTrigger>
          <div className="flex items-center justify-center bg-white">
            <DialogContent className="sm:max-w-[425px]">
              <div className="flex space-x-6">
                <div className="space-y-1">
                  <h4 className="text-lg text-black font-base font-extrabold leading-none">
                    MIGUEL GALPERIN
                  </h4>
                  <p className="text-sm text-black opacity-75 dark:text-slate-400">
                    Desarrollador Fullstack: Figma a Python, Figma a React...
                  </p>
                </div>
                
              </div>
              <Separator className="bg-black bg-opacity-75" />
              <div className="grid gap-4">
                <div className="grid grid-cols-1 items-center gap-4">
                  <Label htmlFor="name" className=""></Label>
                </div>
                <div className="-ml[1px] mb-16 w-full">
                  <div className="rounded-md bg-transparent p-6">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </DialogContent>
          </div>
        </Dialog>
      </div>
      <SiteHeader />
      <main style={{ flex: 1 }}>{children}</main>
      <Analytics />
      <SiteFooter />
    </div>
  )
}

