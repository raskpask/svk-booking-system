// src/theme.ts

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize your primary color here
    },
    secondary: {
      main: "#dc004e", // Customize your secondary color here
    },
    // Add more colors as needed
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Customize your font family here
  },
  // Add more theme customization as needed
});

export default theme;
