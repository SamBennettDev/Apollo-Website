import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggleSwitch";
import { mainNav } from "@/config/nav-items";
import { navbarHeight } from "@/utils/sizes";

export function DesktopNav() {
  const location = useLocation();

  return (
    <nav
      className={` justify-between items-center mx-[20px] hidden md:flex`}
      style={{ height: `${navbarHeight}px` }}
    >
      <div className="flex gap-[10px]">
        <Link to="/" className="flex items-center justify-center mr-[10px]">
          <div className="font-bold">Apollo</div>
          <div className="">Net</div>
        </Link>
        {mainNav.map((navItem, index) => {
          return (
            <Link
              className={
                location.pathname === navItem.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground "
              }
              key={index}
              to={navItem.href}
              target={navItem.external ? "_blank" : undefined}
            >
              {navItem.title}
            </Link>
          );
        })}
      </div>
      <ThemeToggle />
    </nav>
  );
}
