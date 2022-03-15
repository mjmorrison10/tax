import { Box, Button, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import Link from "next/link";


export const style = {
  backgroundColor: blue[300],
  top: "0",
  left: "0",
  position: "absolute",
  minHeight: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const typographyStyle = {
  textAlign: "center",
  px: 2,
};

function apply() {
  return (
    <Box sx={style}>
      
      <Typography variant="h4" component="h1" gutterBottom sx={typographyStyle}>
        Are you interested in tax relief?
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom sx={typographyStyle}>
        Answer this short survey to learn about your tax relief options
      </Typography>
     <Link href="/prompted" passHref>
      <Button variant="contained" size="large" color="primary">
        Get Started
      </Button>
     </Link>
    </Box>
  );
}

export default apply;
