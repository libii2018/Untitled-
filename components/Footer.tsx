import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="px-4 lg:px-20 lg:pt-16 lg:pb-12 lg:items-center">
      <div className="grid grid-cols-2 items-center gap-8 my-12 lg:grid-cols-6 sm:grid-cols-3">
        <div>
          <h2 className="font-semibold text-sm mb-4 text-[#98A2B3]">Product</h2>
          <div className="flex flex-col items-start">
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Overview</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Features</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Solutions</Link>
              </Button>
              <span className="ml-4 font-medium text-xs text-[#027A48]">
                New
              </span>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Tutorials</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Pricing</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Releases</Link>
              </Button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-sm mb-4 text-[#98A2B3]">Company</h2>
          <div className="flex flex-col items-start">
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>About us</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Careers</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Press</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>News</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Media kit</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Contact</Link>
              </Button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-sm mb-4 text-[#98A2B3]">
            Resources
          </h2>
          <div className="flex flex-col items-start">
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Blog</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Newsletter</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Events</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Help centre</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Tutorials</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Support</Link>
              </Button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-sm mb-4 text-[#98A2B3]">
            Use cases
          </h2>
          <div className="flex flex-col items-start">
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Startups</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Enterprise</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Government</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>SaaS</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Marketplaces</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Ecommerce</Link>
              </Button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-sm mb-4 text-[#98A2B3]">Social</h2>
          <div className="flex flex-col items-start">
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Twitter</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>LinkedIn</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Facebook</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>GitHub</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>AngelList</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Dribbble</Link>
              </Button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-sm mb-4 text-[#98A2B3]">Legal</h2>
          <div className="flex flex-col items-start">
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Terms</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Privacy</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Cookies</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Licenses</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Settings</Link>
              </Button>
            </div>
            <div>
              <Button variant={"customLink"} size={"customLink"} asChild>
                <Link href={"#"}>Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between pt-8 pb-12 lg:flex-row lg:items-center">
        <Image
          className="mb-6 lg:mb-0"
          src="/img/logo.svg"
          width={142}
          height={32}
          alt="Picture of the logo"
        />
        <p className="font-normal text-base text-[#667085]">
          © 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </div>
  );
}
