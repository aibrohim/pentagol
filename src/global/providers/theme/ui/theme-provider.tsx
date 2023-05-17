import { FC, useMemo, useState } from "react";

import { Theme, ThemeContext } from "@/shared/config/theme";

interface ThemeProviderProps {
  children?: React.ReactNode;
  externalDefaultTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  // const themejon = cookies().get("theme")?.value as Theme;
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
