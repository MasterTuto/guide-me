import React, { createContext, FC, PropsWithChildren } from "react";

type ThemeChangerProps = {
  currentTheme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

type Props = PropsWithChildren<{
  values: ThemeChangerProps;
}>;

export const ThemeChangerContext = createContext<ThemeChangerProps>({
  currentTheme: "light",
  setTheme: () => {},
});

export const ThemeChangerProvider: FC<Props> = ({ values, children }) => {
  return (
    <ThemeChangerContext.Provider value={values}>
      {children}
    </ThemeChangerContext.Provider>
  );
};
