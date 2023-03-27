// src/components/Footer.tsx

import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(4),
  flexGrow: 1,
  bottom: 0,
  height: "300px",
  minHeight: "300px",
  zIndex: 1201,
  display: "flex",
  flexDirection: "column",

  justifyContent: "center",
}));

const divStyle = {
  //   border: "1px solid red", // camel cased
};

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container maxWidth="md" style={divStyle}>
        <Box textAlign="center">
          <Typography variant="body1">
            &copy; Your Company Name. All rights reserved.
          </Typography>
          <Typography variant="body2">
            1234 Street Name, City, State, Postal Code
          </Typography>
          <Typography variant="body2">Phone: (555) 123-4567</Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
