"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

type MobileNavProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
};

const MobileNav = ({ isMenuOpen, setIsMenuOpen }: MobileNavProps) => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Progenitor Schools", path: "/members" },
    { name: "Publications", path: "/publications" },
    { name: "News", path: "/news-events" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Utility"
      className="bg-white flex items-center justify-between h-20 px-4 fixed w-full z-50"
    >
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/amsa-logoo.png"
          alt="AMSA Logo"
          width={200}
          height={80}
          className="h-20 w-auto object-contain"
          priority
        />
      </Link>

      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      <div
        className={`
          fixed left-0 w-full bg-primary z-40 flex flex-col items-center 
          transition-all duration-300
          ${
            isMenuOpen
              ? "top-20 h-screen opacity-100"
              : "top-20 h-0 opacity-0 pointer-events-none"
          }
        `}
      >
        <ul className="flex flex-col gap-8 pt-12 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`text-white font-montserrat text-2xl transition-colors ${
                    isActive ? "text-white" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

          <Link
            href="/gallery"
            className="px-5 py-2 text-center bg-white rounded-lg font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            AMSA 2026 Highlights
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
