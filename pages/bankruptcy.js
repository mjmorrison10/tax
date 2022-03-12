import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { style } from "./apply";
import Link from "next/link";


function bankruptcy() {
  return (
    <Box sx={style}>
      bankruptcy
      <ButtonGroup>
        <Link href="/taxIssueTypes" passHref>
          <Button>Back</Button>
        </Link>
        <Link href="/contact" passHref>
          <Button>Next</Button>
        </Link>
      </ButtonGroup>
    </Box>
  );
}

export default bankruptcy;
