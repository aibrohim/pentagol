import { createContext } from "react";

export enum Theme {
  LIGHT = "Light",
  DARK = "Dark",
}

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

type key = "theme";
export const LOCAL_STORAGE_THEME_KEY: key = "theme";

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
});
