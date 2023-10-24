"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export function ServicesDD() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">Services</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>

          <Link href="/services/web-development">
          <DropdownMenuRadioItem value="web-development">web development</DropdownMenuRadioItem>
          </Link>

          <Link href="/services/mobile-development">
          <DropdownMenuRadioItem value="mobile-development">mobile Development</DropdownMenuRadioItem>
            </Link>          

            <Link href="/services/security">
          <DropdownMenuRadioItem value="security">Secuity</DropdownMenuRadioItem>

            </Link>

            <Link href="/services/seo">
          <DropdownMenuRadioItem value="seo">SEO</DropdownMenuRadioItem>

            </Link>
            <Link href="/services/marketing">
          <DropdownMenuRadioItem value="marketing">marketing</DropdownMenuRadioItem>

            </Link>
          <Link href="/services/uiux">
          <DropdownMenuRadioItem value="ui/ux">UI/UX</DropdownMenuRadioItem>

           
          </Link>


        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
