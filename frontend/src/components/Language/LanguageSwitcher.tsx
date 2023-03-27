// src/components/LanguageSwitcher.tsx

import React from "react";
import { MenuItem, Menu, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";

const LanguageSwitcher: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { i18n } = useTranslation();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    handleClose();
  };

  return (
    <div>
      <IconButton color="inherit" onClick={handleMenu}>
        <LanguageIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => changeLanguage("sv")}>Svenska</MenuItem>
        <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;
