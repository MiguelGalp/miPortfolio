

import React from "react"

import { cn } from "@/lib/utils"

interface DemoIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const DemoIndicator: React.FC<DemoIndicatorProps> = ({ className }) => {
  return (
    <span
      className={cn(
        "absolute top-1 right-0 flex h-5 w-5 items-center justify-center motion-reduce:animate-bounce",
        className
      )}
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
    </span>
  )
}
