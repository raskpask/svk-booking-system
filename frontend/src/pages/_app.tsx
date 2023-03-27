// src/pages/_app.tsx

import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";
import "../i18n/i18n";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
