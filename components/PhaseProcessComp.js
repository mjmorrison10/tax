import { NavigateNext } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import Phase from "./index/phase";

function PhaseProcessComp() {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={1}
      my={2}
      sx={{
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Typography variant="h3" component="h2" color="info.main">
        2-Phase Quick Resolution Process
      </Typography>
      <Phase
        number={1}
        title={"Discovery & Strategy"}
        paragraph={
          "This preliminary phase starts with a free consultation to assess your financial situation. Then our team of certified professionals will analyze and prepare a resolution plan to present to the IRS on your behalf."
        }
        timeFrame={"24 hrs - 1 month"}
      />
      <NavigateNext
        color="info"
        sx={{
          fontSize: "5rem",
          transform: { xs: "rotate(90deg)", sm: "rotate(0deg)" },
        }}
      />
      <Phase
        number={2}
        comp={"h3"}
        title={"Resolution"}
        paragraph={
          "After IRS compliance has been established, we’ll bring you up to date on any and all tax returns. Next, your dedicated Case Manager and Tax Attorney will present your case to the IRS to achieve the best possible resolution. "
        }
        timeFrame={"3-6 months"}
      />
    </Box>
  );
}

export default PhaseProcessComp;
