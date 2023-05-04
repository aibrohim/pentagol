import { FC, useMemo, useState } from "react";

import { Theme, ThemeContext } from "@/shared/config/theme";

interface ThemeProviderProps {
  children?: React.ReactNode;
  externalDefaultTheme?: Theme;
}

const defaultTheme: Theme = Theme.LIGHT;

export const ThemeProvider: FC<ThemeProviderProps> = ({
  externalDefaultTheme,
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(
    externalDefaultTheme || defaultTheme
  );

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
