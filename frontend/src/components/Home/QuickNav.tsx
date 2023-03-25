import React from "react";
import { Button, TextField, Grid, Typography } from "@mui/material";
import Link from "next/link";

const QuickNav: React.FC = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Link href="/booking" passHref>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            width: "200px",
            height: "80px",
            margin: "10px",
            fontSize: "20px",
          }}
        >
          Boka bana
        </Button>
      </Link>
    </Grid>
  );
};

export default QuickNav;
