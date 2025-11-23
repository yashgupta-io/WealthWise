import { createContext, useContext } from "react";

export const ThemeContext = createContext(null);

export const useAppTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('Must be used under <ThemeContext.provider>');
  }
  return ctx;
}