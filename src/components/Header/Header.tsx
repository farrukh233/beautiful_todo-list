import React from "react";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box component='header' sx={{ paddingTop: "10px", marginBottom: "20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: {
            xs: 18,
            sm: 24,
            md: 32,
            lg: 48,
            xl: 48,
          },
          fontWeight: "600",
        }}>
        Todo list
      </Box>
    </Box>
  );
};

export default Header;
