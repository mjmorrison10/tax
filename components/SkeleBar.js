import { Skeleton } from "@mui/material";
import React from "react";

function SkeleBar() {
  return (
    <Skeleton
      animation="wave"
      height={8}
      width={'90%'}
      sx={{
        margin: "0 auto",
        my: 2,
      }}
    />
  );
}

export default SkeleBar;
