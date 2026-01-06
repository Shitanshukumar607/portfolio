"use client";

import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { name: "About", link: "/about" },
  { name: "Now", link: "/now" },
  { name: "Contact", link: "/contact" },
  { name: "GitHub", link: "https://github.com/ShitanshuKumar607" },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <header
      className="fixed w-3xl top-0 bg-background transition-all duration-200 ease-in z-100"
    >
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex items-center justify-between py-4"
      >
        <Link
          href="/"
          className="logo-text nav-logo z-50 select-none px-1 text-4xl font-semibold sm:px-0 shadow-hand"
        >
          Shitanshu
        </Link>

        <ul className="flex items-center gap-2 sm:gap-5">
          {navigationLinks.map((link) => (
            <li key={link.link} className="hidden sm:block">
              <Link
                href={link.link}
                className={`link z-50 text-lg ${
                  path == link.link ? "link-active" : ""
                }`}
                target={link.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li className="z-50 flex h-6 w-6">
            <ThemeToggle />
          </li>

          <li className="flex sm:hidden"></li>
        </ul>
      </nav>
    </header>
  );
}
