import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { style } from "./apply";
import Link from "next/link";


function unfiledTaxes() {
  return (
    <Box sx={style}>
      unfiled taxes
      <ButtonGroup>
        <Link href="/prompted">
          <Button>Back</Button>
        </Link>
        <Link href="/taxDebt">
          <Button>Next</Button>
        </Link>
      </ButtonGroup>
    </Box>
  );
}

export default unfiledTaxes;
