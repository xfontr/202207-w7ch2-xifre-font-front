import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import styledMainTheme from "./styledMainTheme";
import { ThemeProvider } from "styled-components";
import "@fontsource/lato";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={styledMainTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
