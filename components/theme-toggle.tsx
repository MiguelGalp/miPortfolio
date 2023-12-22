"use client"
import * as React from "react"
import { useTheme } from "next-themes"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Icons.sun className="hover:text-slate-900 dark:text-dracula-nosferatu-100 dark:hover:text-slate-400" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount>
        <DropdownMenuItem
          className="rounded-md my-1 hover:bg-gray-100 dark:hover:bg-gray-900 focus:pointer-events-auto"
          onClick={() => setTheme("light")}
        >
          <Icons.sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="rounded-md my-1 hover:bg-gray-100 dark:hover:bg-gray-900 focus:pointer-events-auto"
          onClick={() => setTheme("dark")}
        >
          <Icons.moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="rounded-md my-1 hover:bg-gray-100 dark:hover:bg-gray-900 focus:pointer-events-auto"
          onClick={() => setTheme("system")}
        >
          <Icons.laptop className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
