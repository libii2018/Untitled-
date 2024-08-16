"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsopen] = useState(false);

  const handleClick = () => {
    setIsopen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center h-[72px] px-4 my-0 mx-auto max-w-[1440px] lg:p-0 border-b-[1px] border-[#F2F4F7]">
      <div
        className={`lg:flex lg:flex-row lg:items-center ${
          isOpen ? "is-open" : ""
        }`}
      >
        <Image
          className=""
          src="/img/logo.svg"
          width={142}
          height={32}
          alt="Picture of the logo"
        />
        <NavigationMenu className="hidden lg:block ml-10">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className="font-semibold text-base text-Gray/600">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-semibold text-base text-Gray/600">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components that you can copy and
                          paste into your apps. Accessible. Customizable. Open
                          Source.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <Link href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </Link>
                  <Link href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </Link>
                  <Link href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-semibold text-base text-Gray/600">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components that you can copy and
                          paste into your apps. Accessible. Customizable. Open
                          Source.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <Link href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </Link>
                  <Link href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </Link>
                  <Link href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="font-semibold text-base text-Gray/600">
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <Image
        onClick={handleClick}
        className="block lg:hidden"
        src="/img/icon.svg"
        width={24}
        height={24}
        alt="Picture of the menu"
      />

      <Avatar className="lg:block hidden">
        <AvatarImage src="/img/avatar-1.png" alt="@shadcn" />
      </Avatar>
    </header>
  );
}
