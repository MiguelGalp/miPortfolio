import { Separator } from "@/components/ui/separator"
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import React from 'react';
import { Label } from "./ui/label";

import ContactForm from "./contact_form";

const ResponsiveCover = () => {
    return (
        <div className="container gap-4 grid-cols-1 flex flex-col -ml-2 ">
            <div className="col-span-2 md:scale-150 md:mt-28 md:ml-44 relative sm:left-5 md:-left-2">
                <img src="/Recorte.svg" alt="placeholder" className=" object-cover" />
            </div>
            <div className="col-span-1 flex flex-col justify-center space-y-4 ml-6 mt-0 md:mt-24">
                <div className="flex items-center">
                    <h2 className="font-muted sm:text-base">MG</h2>
                    ⎟
                    <h2 className="text-sm font-muted sm:text-base">Desarrollador</h2>
                </div>
                <h1 className="text-5xl md:text-7xl tracking-tighter font-bold md:font-bolder relative bottom-3 -ml-1 sm:mr-6 md:mr-[50vw]">CULTURA DIGITAL, JUNTOS.</h1>
                <h3 className="mr-8 text-2xl md:text-3xl tracking-tight md:tracking-normal leading-6 md:leading-8 sm:mr-0 md:mr-10">Apps, datos, contenidos y servicios para el sector creativo.<span className="sm:hidden md:inline"> Me dedico al desarrollo de sistemas diseñados para atraer y entender a las audiencias.</span></h3>
            </div>

            <div className="col-span-2 mx-6 text-base md:text-xl leading-5">
                <p>Utilizo un Stack moderno y económico (Next.js y Tailwind en el cliente, Python en el servidor). Trabajemos juntos para construir la herramienta que querés. Escribime hoy para discutir tu proyecto!</p>
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
