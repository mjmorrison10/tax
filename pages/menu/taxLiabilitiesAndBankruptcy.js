import { Box, Button, Typography } from "@mui/material";
import React from "react";
import {
  bankruptcyInfo,
  bankruptcyLinks,
  checkmark,
} from "../../public/Settings/baseSettings";
import TitleComp from "./components/title";

function TaxLiabilitiesAndBankruptcy() {
  console.log(bankruptcyInfo);
  return (
    <Box>
      <TitleComp title="Tax Debt and Bankruptcy" />
      <Box>
        {bankruptcyInfo.map((info, i) => (
          <Box
            key={i}
            display={"flex"}
            flexDirection={"column"}
            gap={1}
            m={"0 auto"}
            sx={{ maxWidth: "85ch" }}
          >
            <Typography
              variant="h4"
              component={"h2"}
              mt={3}
              gutterBottom
              textAlign={"center"}
            >
              {info.title}
            </Typography>
            <Typography variant="body">{info.paragraph}</Typography>
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
            {info.list && (
              <Typography>
                {checkmark}
                {info.list}
              </Typography>
            )}
            {info.list2 && (
              <Typography>
                {checkmark}
                {info.list2}
              </Typography>
            )}
            {info.list3 && (
              <Typography>
                {checkmark}
                {info.list3}
              </Typography>
            )}
            {info.list4 && (
              <Typography>
                {checkmark}
                {info.list4}
              </Typography>
            )}
            {info.list5 && (
              <Typography>
                {checkmark}
                {info.list5}
              </Typography>
            )}
          </Box>
        ))}

        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"space-around"}
          mt={4}
          mb={1}
        >
          {bankruptcyLinks.map((link, i) => (
            <Button
              key={i}
              href={link.link}
              variant="contained"
              color={"secondary"}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default TaxLiabilitiesAndBankruptcy;
