import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./theme-context";
import cookies from "js-cookie";

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme: Theme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    cookies.set(LOCAL_STORAGE_THEME_KEY, newTheme, { path: "/" });

    setTheme(newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
