import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./main.css";
import AppRouter from "./routes";
import { ThemeChangerProvider } from "./context/ThemeChanger";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({});

const App: React.FC = () => {
  const [theme, setTheme] = useState("light");

  const currentTheme = theme === "dark" ? darkTheme : lightTheme;

  return (
    <React.StrictMode>
      <ThemeProvider theme={currentTheme}>
        <ThemeChangerProvider values={{ currentTheme: theme, setTheme }}>
          <CssBaseline />
          <AppRouter />
        </ThemeChangerProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
