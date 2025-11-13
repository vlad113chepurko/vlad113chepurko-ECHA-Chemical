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
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="search-button" type="button">
            <img width={25} height={25} src="/icons/search.svg" alt="search" />
          </button>
          <motion.input
            className="search-bar"
            type="text"
            placeholder="Search..."
          />
        </div>
        <button
          className="switch-button"
          type="button"
        >
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
