import { mainNav } from "@/config/nav-items";
import { navbarHeight, sideMenuWidth } from "@/utils/sizes";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggleSwitch";

export function MobileNav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`flex justify-between items-center mx-[20px] md:hidden`}
        style={{ height: `${navbarHeight}px` }}
      >
        <div
          className={`flex items-center transition-all duration-300 z-[101]`}
          style={{
            transform: isOpen
              ? `translateX(${sideMenuWidth}vw)`
              : "translateX(0)",
          }}
        >
          {/* Hamburger menu */}
          <button
            className="md:hidden h-10 w-10"
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
          >
            <div className="grid justify-items-center gap-[5px]">
              <span
                className={`h-[2px] w-5 rounded-full bg-foreground transition duration-300  ${
                  isOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              ></span>
              <span
                className={`h-[2px] w-5 rounded-full bg-foreground ${
                  isOpen ? "scale-x-0 transition" : ""
                }`}
              ></span>
              <span
                className={`h-[2px] w-5 rounded-full bg-foreground transition duration-300  ${
                  isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Theme toggle */}
        <ThemeToggle />
      </nav>

      <div
        className={`absolute h-screen w-screen top-0 left-0 transition-all duration-300 z-[100] bg-gradient-to-r from-card from-80% to-100% ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        // style={{ width: `${sideMenuWidth}vw` }}
      >
        {/* Logo (only visible when menu is open) */}
        <div className="w-[80%] items-center content-center flex flex-col gap-[20px]">
          <div
            className={`flex justify-center items-center w-full px-[20px]`}
            style={{ height: `${navbarHeight}px` }}
          >
            <Link
              to="/"
              className={`flex items-center justify-center w-min text-2xl`}
              onClick={toggleMenu}
            >
              <div className="font-bold">React</div>
              <div className="">Essentials</div>
            </Link>
          </div>

          {/* Navigation links (only visible when menu is open) */}
          {mainNav.map((navItem, index) => (
            <Link
              key={index}
              to={navItem.href}
              className={
                location.pathname === navItem.href
                  ? "text-foreground w-min text-xl"
                  : "text-muted-foreground hover:text-foreground w-min text-xl"
              }
              target={navItem.external ? "_blank" : undefined}
              onClick={toggleMenu}
            >
              {navItem.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
