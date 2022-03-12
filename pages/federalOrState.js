import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { style } from "./apply";
import Link from "next/link";


function federalOrState() {
  return (
    <Box sx={style}>
      federal or state
      <ButtonGroup>
        <Link href="/taxDebt" passHref>
          <Button>Back</Button>
        </Link>
        <Link href="/taxIssueTypes" passHref>
          <Button>Next</Button>
        </Link>
      </ButtonGroup>
    </Box>
  );
}

export default federalOrState;
