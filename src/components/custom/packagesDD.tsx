"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function PackagesDD() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-Mobile-L-Head mb-[7.44%]">Packages</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <Link href="/packages/bitPackage">
            <DropdownMenuRadioItem value="bit">bit</DropdownMenuRadioItem>
          </Link>

          <Link href="/packages/megabitPackage">
            <DropdownMenuRadioItem value="megabit">
              megabit
            </DropdownMenuRadioItem>
          </Link>
          <Link href="/packages/gigagabitPackage">
            <DropdownMenuRadioItem value="gigabit">
              gigagabit
            </DropdownMenuRadioItem>
          </Link>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
