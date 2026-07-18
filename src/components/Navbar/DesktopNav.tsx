"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const DesktopNav = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      children: [{ name: "Excos", path: "/about/excos" }],
    },
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
      className="h-20 bg-white backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto relative flex items-center h-full">
        <div className="flex items-center">
          <Image
            src="/images/amsa-logoo.png"
            alt="AMSA Logo"
            width={200}
            height={80}
            className="h-20 w-auto object-contain"
            priority
          />
        </div>

        <ul className="flex items-center gap-5 font-medium absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.path ||
              (link.path !== "/" && pathname.startsWith(link.path));
            const hasChildren = !!link.children;
            const isOpen = openDropdown === link.path;
            const showChildren = hasChildren && (isOpen || pathname.startsWith(link.path));

            return (
              <li
                key={link.path}
                className="relative"
                onMouseEnter={() => hasChildren && setOpenDropdown(link.path)}
                onMouseLeave={() => hasChildren && setOpenDropdown(null)}
              >
                <div className="flex items-center gap-2">
                  <Link
                    href={link.path}
                    className={`relative font-montserrat transition-colors ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-gray-700 hover:text-primary"
                    } after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:bg-primary after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                      isActive ? "after:w-full" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                  {hasChildren && (
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`${link.name.toLowerCase()}-submenu`}
                      className="text-gray-500 hover:text-primary transition"
                      onClick={() =>
                        setOpenDropdown((current) =>
                          current === link.path ? null : link.path
                        )
                      }
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>

                {hasChildren && (
                  <ul
                    id={`${link.name.toLowerCase()}-submenu`}
                    className={`absolute left-0 top-full mt-2 min-w-[180px] rounded-lg bg-white shadow-lg border border-slate-200 transition-all duration-200 ${
                      showChildren
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    } z-50`}
                  >
                    {link.children.map((child) => {
                      const isChildActive = pathname === child.path;
                      return (
                        <li key={child.path}>
                          <Link
                            href={child.path}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              isChildActive
                                ? "text-primary font-semibold"
                                : "text-gray-700 hover:bg-slate-100"
                            }`}
                          >
                            {child.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        <div className="ml-auto">
          <Link
            href="/gallery"
            className="px-2 py-2 text-sm bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            AMSA 2026 Highlights
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
