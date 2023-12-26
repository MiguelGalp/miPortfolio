
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import React from 'react';
import { Label } from "./ui/label";

import ContactForm from "./contact_form";

import Image from "next/image";

const ResponsiveCover = () => {
  return (
    <div className="container gap-4 grid-cols-1 flex flex-col -ml-2 dark:bg-dracula-nosferatu-900 ">
      <div className="col-span-full relative right-24 md:right-28 md:scale-125 md:mt-28">
        <Image
          src="/Recorte_2.svg"
          alt="placeholder"
          height={500}
          width={500}
        />
      </div>
      <div className="col-span-1 flex flex-col justify-center space-y-4 ml-6 mt-0 md:mt-24">
        <div className="flex items-center">
          <h2 className="font-muted sm:text-base dark:text-dracula-nosferatu-100">MG</h2>
          ⎟
          <h2 className="text-sm font-muted sm:text-base dark:text-dracula-nosferatu-100 ">Desarrollador</h2>
        </div>
        <h1 className="text-5xl md:text-7xl tracking-tighter font-bold md:font-bolder relative bottom-3 -ml-1 sm:mr-6 md:mr-[50vw] dark:text-dracula-nosferatu-100">CULTURA DIGITAL, JUNTOS.</h1>
        <h3 className="mr-8 text-2xl md:text-3xl tracking-tight md:tracking-normal leading-6 md:leading-8 sm:mr-0 md:mr-10 dark:text-dracula-nosferatu-100">Tengo un estudio (junto con diseñadorxs amigxs) donde construyo objetos digitales pensando la experiencia del usuario (UX) y la interface (UI).<span className="sm:hidden md:inline"> Lo hago para <Link href="https://instagram.com/atlantic.x">@atlantic.x</Link> y también podés escribirme, abajo.</span></h3>
      </div>

      <div className="col-span-2 mx-6 text-base md:text-xl leading-5 dark:text-dracula-nosferatu-100">
        <p>Trabajo con JavaScript y Python (React/Jinja), y según los objetivos del proyecto también incorporo frameworks y librerías como 11ty, Next.js, Tailwind, Bootstrap, etc.</p>
      </div>
      <div className="col-span-1 flex items-start justify-left sm:col-span-1 sm:flex justify-start py-6 px-6">
        <Dialog>
          <DialogTrigger className="z-50">
            <Button className="dark:bg-dracula-aro-50 sm:text-base md:text-xl">Contacto</Button>
          </DialogTrigger>
          <div className="flex items-center justify-center bg-white">
            <DialogContent className="sm:max-w-[425px]">
              <div className="flex space-x-6">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">
                    Miguel Galperin
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Desarrollador
                  </p>
                </div>
                <Avatar className="bottom-[2px]">
                  <AvatarImage src="/Avatar_Darker.png" className="" />
                  <AvatarFallback>MG</AvatarFallback>
                </Avatar>
              </div>
              <Separator className="text-black" />
              <div className="grid gap-4">
                <div className="grid grid-cols-1 items-center gap-4">
                  <Label htmlFor="name" className=""></Label>
                </div>
                <div className="-ml[1px] mb-16 w-full">
                  <div className="rounded-md bg-gray-100 p-6">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </DialogContent>
          </div>
        </Dialog>
      </div>
    </div>
  );
}

export default ResponsiveCover;
