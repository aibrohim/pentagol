import React from "react";
import { createRoot } from "react-dom/client";

import reportWebVitals from "./reportWebVitals";

import { App } from "./app/app";

import { StoreProvider } from "@/app/providers/store";
import { ThemeProvider } from "@/app/providers/theme";
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
