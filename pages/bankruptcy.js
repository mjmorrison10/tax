import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { style } from "./apply";
import Link from "next/link";


function bankruptcy() {
  return (
    <Box sx={style}>
      bankruptcy
      <ButtonGroup>
        <Link href="/taxIssueTypes">
          <Button>Back</Button>
        </Link>
        <Link href="/contact">
          <Button>Next</Button>
        </Link>
      </ButtonGroup>
    </Box>
  );
}

export default bankruptcy;
