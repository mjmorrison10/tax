import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { style } from "./apply";
import Link from "next/link";


function taxDebt() {
  return (
    <Box sx={style}>
      tax debt
      <ButtonGroup>
        <Link href="/unfiledTaxes" passHref>
          <Button>Back</Button>
        </Link>
        <Link href="/federalOrState" passHref>
          <Button>Next</Button>
        </Link>
      </ButtonGroup>
    </Box>
  );
}

export default taxDebt;
