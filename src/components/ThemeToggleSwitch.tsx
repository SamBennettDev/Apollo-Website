import { useState } from "react";
import { useTheme } from "@/providers/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(theme === "dark");

  const toggleTheme = () => {
    setIsChecked(!isChecked);
    setTheme(isChecked ? "light" : "dark");
  };

  return (
    <label className="inline-flex items-center cursor-pointer relative">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={toggleTheme}
      />
      <div className="relative w-14 h-7 bg-card peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-foreground after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-foreground-muted"></div>
      <div
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 flex items-center justify-center w-6 h-6 -ml-3 text-foreground ${
          isChecked ? "opacity-100" : "opacity-0"
        }`}
      >
        <FontAwesomeIcon icon={faMoon} />
      </div>
      <div
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-6 h-6 -mr-3 text-foreground ${
          !isChecked ? "opacity-100" : "opacity-0"
        }`}
      >
        <FontAwesomeIcon icon={faSun} />
      </div>
    </label>
  );
}
