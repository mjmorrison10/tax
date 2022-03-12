import { Box, Typography } from "@mui/material";
import React from "react";
import { romanize } from "../romanize";

function Phase(props) {
  console.log(props);
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={1} >
      <Typography variant="body">Phase {romanize(props.number)}</Typography>
      <Typography variant="h4" component={props.comp}>{props.title}</Typography>
      <Typography variant="body" textAlign={'center'} >{props.paragraph}</Typography>
      <Typography variant="body2">Average Time Frame: {props.timeFrame}</Typography>
    </Box>
  );
}

export default Phase;
