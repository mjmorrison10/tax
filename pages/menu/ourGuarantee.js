import { Box, Typography } from "@mui/material";
import React from "react";
import PageComingSoon from "../../components/pageComingSoon";
import {
  companyName,
  companyPhoneNumber,
} from "../../public/Settings/baseSettings";
import TitleComp from "./components/title";
import { guaranteeInfo } from "../../public/Settings/baseSettings";
import CardComp from "../../components/CardComp";

function OurGuarantee() {
  return (
    <Box>
      <TitleComp title={`The ${companyName} Guarantee`} />
      {/* <Box display={"flex"} flexDirection={"column"} gap={2}> */}
      <Typography variant="body">
        Resolve your tax debt with confidence. TaxRise offers a variety of
        guarantees to provide our clients with the piece of mind that they
        deserve.
      </Typography>
      <Box display={"flex"} flexDirection={"column"}>
        <Box></Box>
        <Box>
          {guaranteeInfo.map((info, i) => (
            <Box display={"flex"} flexDirection={"column"} key={i}>
              <Typography
                variant="h4"
                component={"h2"}
                color="info.dark"
                gutterBottom
              >
                {info.title}
              </Typography>
              <CardComp
                // question={info.title}
                answer={info.paragraph}
                question={info.paragraphTitle}
                // answerTitle={info.paragraphTitle}
              />
            </Box>
          ))}
        </Box>
        <Typography variant="body">
          {`For more information about our guarantee policies, speak directly with a ${companyName} representative by calling ${companyPhoneNumber}.`}
        </Typography>
      </Box>
    </Box>
  );
}

export default OurGuarantee;
