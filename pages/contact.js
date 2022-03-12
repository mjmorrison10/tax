import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { style } from "./apply";
import Link from "next/link";


function contact() {
  return (
    <Box sx={style}>
      contact
      <ButtonGroup>
        <Link href="" passHref>
          <Button>Back</Button>
        </Link>
        <Link href="" passHref>
          <Button>Next</Button>
        </Link>
      </ButtonGroup>
    </Box>
  );
}

export default contact;
