import { ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom";

import "./reset.css";

import App from "./App";
import { theme } from "./theme";

import Providers from "./providers";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
