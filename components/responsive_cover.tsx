import { Separator } from "@/components/ui/separator"
import React from 'react';

const ResponsiveCover = () => {
    return (
        <div className="gap-4 grid-cols-1 flex flex-col items-center">
            <div className="col-span-2 sm:flex-shrink-0 -mt-10">
                <img src="/coderGIF.svg" alt="placeholder" className="w-full h-full object-cover sm:mt-0" />
            </div>
            <div className="col-span-1 flex flex-col justify-center space-y-4 ml-6">
                <div className="flex items-center ml-1">
                    <h2 className="font-muted sm:text-base">MG</h2>
                    ⎟
                    <h2 className="text-sm font-muted sm:text-base">Desarrollador</h2>
                </div>
                <h1 className="text-5xl tracking-tighter font-bold relative bottom-3">CULTURA DIGITAL, JUNTOS.</h1>
                <h3 className="mr-8 text-2xl ml-1 tracking-tight leading-6">Me especializo en dar vida a aplicaciones y sitios web centrados en el usuario. Desde frontends hasta plataformas de micro-servicios digitales, te puedo ayudar a hacer realidad tu visión. </h3>
            </div>

            <div className="col-span-2 mx-7 text-base leading-5">
                <p>Utilizo un Stack moderno y económico (Next.js y Tailwind en el cliente, Python en el servidor). Trabajemos juntos para construir la herramienta que querés. Escribime hoy para discutir tu proyecto!</p>
            </div>
            <div className="col-span-1 flex items-start justify-left sm:col-span-1 sm:flex justify-center py-6">
                <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-6 rounded -ml-3 sm:ml-0">
                    Contacto
                </button>
            </div>
        </div>
    );
}

export default ResponsiveCover;
