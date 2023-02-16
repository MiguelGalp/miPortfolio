import { cn } from "@/lib/utils"
import React from "react";

interface DemoIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const DemoIndicator: React.FC<DemoIndicatorProps> = ({ className }) => {
  return (
    <span
      className={cn(
        "absolute top-1 right-0 flex h-5 w-5 motion-reduce:animate-bounce items-center justify-center",
        className
      )}
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
    </span>
  );
};
