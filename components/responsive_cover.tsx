import { Separator } from "@/components/ui/separator"
import React from 'react';

const ResponsiveCover = () => {
    return (
        <div className="container gap-4 grid-cols-1 flex flex-col -ml-2 ">
            <div className="col-span-2 scale-90 md:scale-150 md:mt-28 md:ml-44">
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
                <button className="bg-black dark:bg-slate-100 hover:bg-blue-700 text-white dark:text-slate-900 font-bold py-2 px-6 rounded md:text-xl">
                    Contacto
                </button>
            </div>
        </div>
    );
}

export default ResponsiveCover;
