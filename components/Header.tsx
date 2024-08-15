import React from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-[72px] pb-0 my-0 mx-auto max-w-[1440px] lg:p-0 border-b-[1px] border-[#F2F4F7]">
      <div className="lg:flex lg:flex-row lg:items-center">
        <Image
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
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-semibold text-base text-Gray/600">
                Resources
              </NavigationMenuTrigger>
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
        src="/img/icon.svg"
        width={24}
        height={24}
        alt="Picture of the menu"
      />
    </header>
  );
}
