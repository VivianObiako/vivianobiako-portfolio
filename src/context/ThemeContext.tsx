import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { Nullable } from "utils/types/models";

interface LayoutProps {
  children?: ReactNode;
}

interface AppContext {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<Nullable<AppContext>>(null);

export const ThemeContextProvider = ({ children }: LayoutProps) => {
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(()=>{
    if(isDark){
        document.body.classList.add('bg-night')
    } else {
        document.body.classList.remove('bg-night')
    }
  }, [isDark])

  return <ThemeContext.Provider value={{ isDark, setIsDark }}>{children}</ThemeContext.Provider>;
};
