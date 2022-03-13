import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";

function Footer() {
  const curYear = new Date().getFullYear();

  console.log(curYear);
  return (
    <Box bgcolor="info.dark" borderRadius={"8px 8px 0 0"}>
      <Typography
        fontWeight={"bold"}
        letterSpacing={1.25}
        color={blue[100]}
        padding={"2.5rem 0 2.5rem 2.5rem"}
      >
        Copyright 2022 - {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}

export default Footer;
