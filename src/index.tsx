import React from "react";
import { createRoot } from "react-dom/client";

import reportWebVitals from "./reportWebVitals";

import { App } from "./app/app";

import { StoreProvider } from "@/app/providers/store";
import { ThemeProvider } from "@/app/providers/theme";

import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>
);

reportWebVitals();
