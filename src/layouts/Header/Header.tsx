import "./Header.css";
import { hooks } from "@/hooks/index";
import { stores } from "@/store/index";
import { motion } from "framer-motion";

export default function Header() {
  const { useThemeStore } = stores;
  const { theme } = useThemeStore();
  const { onToggleTheme } = hooks.useTheme();

  function handleToggleTheme() {
    onToggleTheme();
  }

  return (
    <header className="header">
      <img
        className="logo"
        src={theme === "light" ? "/logo-dark.svg" : "/logo-light.svg"}
        alt="logo"
      />
      <div className="right-section">
        <button className="switch-button" type="button">
          <motion.img
            animate={{ rotate: theme === "light" ? 0 : 360 }}
            width={30}
            height={30}
            src={theme === "light" ? "/icons/Sun.svg" : "/icons/Moon.svg"}
            alt="theme-switcher"
            onClick={handleToggleTheme}
          />
        </button>
      </div>
    </header>
  );
}
