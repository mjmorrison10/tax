import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import PageComingSoon from "../../components/pageComingSoon";
import {
  companyName,
  companyPhoneNumber,
} from "../../public/Settings/baseSettings";
import TitleComp from "./components/title";
import { guaranteeInfo } from "../../public/Settings/baseSettings";
import CardComp from "../../components/CardComp";

function imgItem() {
  return (
    <ImageListItem cols={1} rows={1} sx={{ height: "25vh", width: "25vh" }}>
      <img
        src={`/images/moneyBackGuarantee.png`}
        srcSet={`/images/moneyBackGuarantee.png`}
        alt={`Money Back Guarantee`}
        loading="lazy"
      />
    </ImageListItem>
  );
}
function OurGuarantee() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap={2}
    >
      <TitleComp title={`The ${companyName} Guarantee`} />
      <Typography variant="body" textAlign={"center"}>
        Resolve your tax debt with confidence. TaxRise offers a variety of
        guarantees to provide our clients with the piece of mind that they
        deserve.
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"center"}
        sx={{
          gap: { xs: 2, md: 5, lg: 10 },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <ImageList
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            justifyContent: "space-around",
          }}
        >
          {imgItem()}
          {imgItem()}
          {imgItem()}
          {/* <ImageListItem>
            <img
              src={`/images/moneyBackGuarantee.png`}
              srcSet={`/images/moneyBackGuarantee.png`}
              alt={`Money Back Guarantee`}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`/images/moneyBackGuarantee.png`}
              srcSet={`/images/moneyBackGuarantee.png`}
              alt={`Money Back Guarantee`}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`/images/moneyBackGuarantee.png`}
              srcSet={`/images/moneyBackGuarantee.png`}
              alt={`Money Back Guarantee`}
              loading="lazy"
            />
          </ImageListItem> */}
        </ImageList>
        <Box>
          {guaranteeInfo.map((info, i) => (
            <Box display={"flex"} flexDirection={"column"} key={i}>
              <Typography
                variant="h4"
                component={"h2"}
                color="info.dark"
                mt={3}
                // gutterBottom
              >
                {info.title}
              </Typography>
              <CardComp
                mwComp={"80ch"}
                // question={info.title}
                answer={info.paragraph}
                question={info.paragraphTitle}
                // answerTitle={info.paragraphTitle}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Typography variant="body" textAlign={"center"}>
        {`For more information about our guarantee policies, speak directly with a ${companyName} representative by calling ${companyPhoneNumber}.`}
      </Typography>
    </Box>
  );
}

export default OurGuarantee;
