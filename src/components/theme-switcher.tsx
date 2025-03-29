import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.body.classList.toggle("dark");
  };

  return (
    <button
      className={className}
      onClick={handleThemeChange}
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
};