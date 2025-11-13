import { stores } from "@/store/index";
import { useEffect } from "react";
export function useTheme() {
  const { useThemeStore } = stores;
  const { theme, toggleTheme, setTheme } = useThemeStore();
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const currentTheme = savedTheme || theme;
    document.documentElement.setAttribute("data-theme", currentTheme);
    setTheme(currentTheme);
  }, []);
  const onToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    toggleTheme();
  };
  return { onToggleTheme };
}
