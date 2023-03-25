// src/components/Header.tsx

import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import LanguageSwitcher from "./Language/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: theme.palette.primary.main,
}));

const Logo = styled(Typography)({
  cursor: "pointer",
  color: "white",
  textDecoration: "none",
});

const HeaderLink = styled(Typography)({
  color: "white",
  textDecoration: "none",
});

const RightHeaders = styled("div")({
  display: "flex",
  alignItems: "center",
});

const Header: React.FC = () => {
  const { t } = useTranslation();
  console.log("t", t);

  return (
    <AppBar position="sticky" sx={{ flexGrow: 1, zIndex: 1201 }}>
      <CustomToolbar>
        <Link href="/" passHref>
          <Logo variant="h6">Dummy Logo</Logo>
        </Link>
        <RightHeaders>
          <LanguageSwitcher />
          <Link href="/login" passHref>
            <Button color="inherit">
              <HeaderLink>Login</HeaderLink>
            </Button>
          </Link>
          <Link href="/signup" passHref>
            <Button color="inherit">
              <HeaderLink>{t("header.signup")}</HeaderLink>
            </Button>
          </Link>
        </RightHeaders>
      </CustomToolbar>
    </AppBar>
  );
};

export default Header;
