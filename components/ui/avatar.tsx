"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import AvatarSvg from 'public/Avatar.svg'


import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-transparent scale-90",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-transparent",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

const AvatarImageSvg = React.forwardRef<
  React.ElementRef<typeof AvatarSvg>,
  React.ComponentPropsWithoutRef<typeof AvatarSvg>
>(({ className, ...props }, ref) => (
  <AvatarImage {...props}>
    <AvatarSvg
      ref={ref}
      className={cn("text-white fill-current", className)}
    />
  </AvatarImage>
))
AvatarImageSvg.displayName = AvatarSvg.displayName

export { Avatar, AvatarImage, AvatarFallback, AvatarImageSvg }
