import { Separator } from "@/components/ui/separator"
import React from 'react';

const ResponsiveCover = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <img src="/coderGIF.svg" alt="placeholder" className="w-full h-full object-cover -mt-4" />
            </div>
            <div className="col-span-1 flex flex-col justify-center -ml-3 space-y-4">
                <div className="flex items-center mt-8">
                    <h2 className="text-sm font-semibold">MG</h2>
                    <Separator className="mx-2" orientation="vertical" />
                    <h2 className="text-sm font-semibold">Desarrollador</h2>
                </div>
                <h1 className="text-5xl tracking-tighter">CULTURA DIGITAL, JUNTOS.</h1>
                <h3 className="mr-4">Me especializo en dar vida a aplicaciones y sitios web centrados en el usuario. Desde frontends hasta plataformas de micro-servicios digitales, te puedo ayudar a hacer realidad tu visión. </h3>
            </div>

            <div className="col-span-2 mx-6 text-xs -mt-12">
                <p>Utilizo un Stack moderno y económico (Next.js y Tailwind en el cliente, Python en el servidor). Trabajemos juntos para construir la herramienta que querés. Escribime hoy para discutir tu proyecto!</p>
            </div>
            <div className="col-span-1 flex items-start justify-left">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded -ml-3">
                    Call To Action
                </button>
            </div>
        </div>
    );
}

export default ResponsiveCover;