import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Theme } from "./styles/Theme";
import { AdvertsContextProvider } from "./contexts/Adverts/AdvertsContext";
import { UserContextProvider } from "./contexts/User/UserContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <UserContextProvider>
          <AdvertsContextProvider>
            <App />
          </AdvertsContextProvider>
        </UserContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
