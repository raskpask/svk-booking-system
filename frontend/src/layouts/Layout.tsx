// src/layouts/Layout.tsx

import React from "react";
import Header from "../components/Header"; // Update the import path here
import Footer from "../components/Footer"; // Update the import path here
import { Container, Box } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        minHeight: "100vh",
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Container
        maxWidth="lg"
        sx={{ flexGrow: 1, paddingTop: 2, minHeight: "700px" }}
      >
        <Box my={4}>{children}</Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
