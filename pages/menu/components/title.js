import { Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";

function TitleComp({ title }) {
  return (
    <Typography
      variant="h2"
      textAlign={"center"}
      component={"h1"}
      bgcolor={"info.dark"}
      paddingTop={1}
      paddingBottom={2}
      marginBottom={1}
      borderRadius={1}
      sx={{
        overflowWrap: 'break-word',
        color: blue[50],
      }}
    >
      {title}
    </Typography>
  );
}

export default TitleComp;
 