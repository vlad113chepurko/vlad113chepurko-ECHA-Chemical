import { stores } from "@/store/index";

export function useTheme() {
  const { useThemeStore } = stores;
  const { theme, toggleTheme } = useThemeStore();
  const onToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    toggleTheme();
  };
  return { onToggleTheme };
}
