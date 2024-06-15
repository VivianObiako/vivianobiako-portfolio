import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);
  if (themeContext) return themeContext;

  throw new Error("Code not in the system context");
};
