import { Box, Typography } from "@mui/material";
import React from "react";
import PageComingSoon from "../../components/pageComingSoon";
import { taxPrepInfo } from "../../public/Settings/baseSettings";
import TitleComp from "./components/title";

function taxPreparationAndResolution() {
  return (
    <Box>
      <TitleComp title="Tax Preparation and Resolution" />
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        {taxPrepInfo.map((info, i) => (
          <Box key={i} display={"flex"} flexDirection={"column"} width={"95ch"}>
            {info.title && (
              <Typography
                gutterBottom
                textAlign={"center"}
                mt={3}
                variant={`${!info.paragraph ? "h3" : "h5"}`}
                component={`${!info.paragraph ? "h2" : "h3"}`}
              >
                {info.title}
              </Typography>
            )}
            {info.paragraph && (
              <Typography variant={`${!info.title ? "body2" : "body"}`}>
                {info.paragraph}
              </Typography>
            )}
            {info.paragraph2 && (
              <Typography variant="body">{info.paragraph2}</Typography>
            )}
            {info.paragraph3 && (
              <Typography variant="body">{info.paragraph3}</Typography>
            )}
            {info.paragraph4 && (
              <Typography variant="body">{info.paragraph4}</Typography>
            )}
            {info.paragraph5 && (
              <Typography variant="body">{info.paragraph5}</Typography>
            )}
            {info.paragraph6 && (
              <Typography variant="body">{info.paragraph6}</Typography>
            )}
            {info.paragraph7 && (
              <Typography variant="body">{info.paragraph7}</Typography>
            )}
            {info.paragraph8 && (
              <Typography variant="body">{info.paragraph8}</Typography>
            )}
            {info.list && (
              <Typography variant="body" component={"li"}>
                {info.list}
              </Typography>
            )}
            {info.list2 && (
              <Typography variant="body" component={"li"}>
                {info.list2}
              </Typography>
            )}
            {info.list3 && (
              <Typography variant="body" component={"li"}>
                {info.list3}
              </Typography>
            )}
            {info.list4 && (
              <Typography variant="body" component={"li"}>
                {info.list4}
              </Typography>
            )}
            {info.list5 && (
              <Typography variant="body" component={"li"}>
                {info.list5}
              </Typography>
            )}
          </Box>
        ))}
        <PageComingSoon />
      </Box>
    </Box>
  );
}

export default taxPreparationAndResolution;
