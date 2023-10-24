"use client";
import Link from "next/link";
import ThemeSwitchButton from "./ThemeSwitchButton";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ServicesDD } from "./dropDowns";
import { Button } from "../ui/button";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Services", href: "/services", current: false },
  { name: "Packages", href: "/packages", current: false },
  { name: "About us", href: "/about", current: false },
  { name: "Contact us", href: "/contact", current: false },
  { name: "Blog", href: "/blog", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className=" fixed w-[100vw] top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-20"
    >
      {({ open }: { open: any }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-start">
                <div className="flex flex-shrink-0 items-center md:pl-0 h-8">
                  {/* <Link href="/">
                    <NavbarLogoImage></NavbarLogoImage>
                                </Link> */}
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-5 items-center">
                    {navigation.map((item) => (
                      <Link href={item.href}>
                        <Button
                          variant="ghost"
                          key={item.name}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Button>
                      </Link>
                    ))}
                    <ServicesDD></ServicesDD>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-10 sm:right-0 flex items-center gap-2">
                  {/* <Link
                    href="https://github.com/humberni/halley"
                    target="_blank"
                    className="hidden sm:block"
                  >
                    <button className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 p-2 text-base font-medium dark:hover:bg-rose-500 hover:bg-rose-500 hover:text-white dark:hover:text-white rounded-full">
                      GitHub
                    </button>
                  </Link> */}
                  <ThemeSwitchButton />
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-neutral-900 dark:text-white ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-4 min-h-screen border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
              {navigation.map((item) => (
                <div>
                  <Button
                    key={item.name}
                    variant="ghost"
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Button>
                </div>
              ))}
              <div>
                <ServicesDD></ServicesDD>
              </div>
              <div></div>
              {/* <Link href="https://github.com/humberni/halley" target="_blank">
                <button className="mt-12 bg-rose-500 text-white px-4 p-3 font-medium rounded-full w-full">
                  GitHub
                </button>
              </Link> */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
