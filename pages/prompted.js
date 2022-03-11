import { Box, Button, ButtonGroup, LinearProgress } from "@mui/material";
import React from "react";
import { style } from "./apply";
import Link from "next/link";
import { linearProgressHeight, linearProgressTopMd, linearProgressTopXsLg } from "../public/getStarted/ApplySettings";

function prompted() {
  const linearProgressValue = 0

  return (
    <Box sx={style}>
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          top: {
            xs: linearProgressTopXsLg,
            md: linearProgressTopMd,
            lg: linearProgressTopXsLg,
          },
        }}
      >
        <LinearProgress
          variant="determinate"
          color="secondary"
          value={linearProgressValue}
          sx={{ height: linearProgressHeight }}
        />
      </Box>

      <ButtonGroup>
        <Link href="/apply">
          <Button>Back</Button>
        </Link>
        <Link href="/unfiledTaxes">
          <Button>Next</Button>
        </Link>
      </ButtonGroup>
    </Box>
  );
}

export default prompted;
