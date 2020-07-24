import React, { useState } from "react";

interface ContextValues {
  isDarkMode: boolean;
  setDarkMode?: (bool: boolean) => void;
}

const defaultValues: ContextValues = {
  isDarkMode: false,
};

export const ThemeContext = React.createContext<ContextValues>(defaultValues);

interface Props {
  children?: any;
}

const ThemeProvider = ({ children }: Props) => {
  const [isDarkMode, setDarkMode] = useState<boolean>(defaultValues.isDarkMode);
  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        setDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
