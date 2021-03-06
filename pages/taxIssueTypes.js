import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { style } from "./apply";
import Link from "next/link";


function taxIssueTypes() {
  return (
    <Box sx={style}>
      tax issues types
      <ButtonGroup>
        <Link href="/federalOrState" passHref>
          <Button>Back</Button>
        </Link>
        <Link href="/bankruptcy" passHref>
          <Button>Next</Button>
        </Link>
      </ButtonGroup>
    </Box>
  );
}

export default taxIssueTypes;
