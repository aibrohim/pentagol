import React from "react";
import { createRoot } from "react-dom/client";

import reportWebVitals from "./reportWebVitals";

import { App } from "./global/app";

import { StoreProvider } from "@/global/providers/store";
import { ThemeProvider } from "@/global/providers/theme";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ThemeProvider>{/* <App /> */}</ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
