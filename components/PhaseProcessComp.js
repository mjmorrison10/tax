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
        2-Stage Fast Resolution Process
      </Typography>
      <Phase
        number={1}
        title={"Discovery & Strategy"}
        paragraph={
          `This preparatory stage commences with a complimentary consultation to evaluate your financial situation. Then our crew of licensed experts will examine and formulate a solution plan to submit to the IRS on your behalf.`
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
          `After establishing IRS compliance, we’ll bring you up to date on any tax returns. Next, your dedicated Case Manager and Tax Attorney will submit your case to the IRS to acquire the best achievable resolution.`
        }
        timeFrame={"3-6 months"}
      />
    </Box>
  );
}

export default PhaseProcessComp;
