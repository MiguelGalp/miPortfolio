import { Separator } from "@/components/ui/separator"
import React from 'react';

const ResponsiveCover = () => {
    return (
        <div className="gap-4 grid-cols-1 flex flex-col ">
            <div className="col-span-2 ">
                <img src="/Cortado.png" alt="placeholder" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 flex flex-col justify-center space-y-4 ml-6">
                <div className="flex items-center">
                    <h2 className="font-muted sm:text-base">MG</h2>
                    ⎟
                    <h2 className="text-sm font-muted sm:text-base">Desarrollador</h2>
                </div>
                <h1 className="text-5xl tracking-tighter font-bold relative bottom-3 -ml-1">CULTURA DIGITAL, JUNTOS.</h1>
                <h3 className="mr-8 text-2xl tracking-tight leading-6">Apps, datos, contenidos y servicios para el sector creativo.</h3>
            </div>

            <div className="col-span-2 mx-6 text-base leading-5">
                <p>Utilizo un Stack moderno y económico (Next.js y Tailwind en el cliente, Python en el servidor). Trabajemos juntos para construir la herramienta que querés. Escribime hoy para discutir tu proyecto!</p>
            </div>
            <div className="col-span-1 flex items-start justify-left sm:col-span-1 sm:flex justify-start py-6 px-9">
                <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-6 rounded -ml-3 sm:ml-0">
                    Contacto
                </button>
            </div>
        </div>
    );
}

export default ResponsiveCover;
