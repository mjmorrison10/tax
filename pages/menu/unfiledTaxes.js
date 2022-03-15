import { Box, Typography } from "@mui/material";
import React from "react";
import { unfiledTaxesInfo } from "../../public/Settings/baseSettings";
import TitleComp from "./components/title";

function unfiledTaxes() {
  return (
    <Box>
      <TitleComp title="Unfiled Taxes" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        m={"0 auto"}
        sx={{ width: "85ch" }}
      >
        {unfiledTaxesInfo.map((info, i) =>
          info.title ? (
            <Typography variant="h4" component={"h2"}>
              {info.title}
            </Typography>
          ) : (
            <Typography variant="body" gutterBottom>
              {info.paragraph}
            </Typography>
          )
        )}
      </Box>
    </Box>
  );
}

export default unfiledTaxes;
