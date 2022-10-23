import React from "react";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box component='header' sx={{ paddingTop: "10px", marginBottom: "20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "48px",
          fontWeight: "600",
        }}>
        Список задач
      </Box>
    </Box>
  );
};

export default Header;
