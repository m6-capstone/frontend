import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { Theme } from "./styles/Theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
