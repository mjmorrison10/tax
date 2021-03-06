import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import NoticeComp from "../../components/commonIrsNotices/noticeComp";
import SkeleBar from "../../components/SkeleBar";
import { notices, noticesLabel } from "../../public/Settings/baseSettings";
import TitleComp from "./components/title";

function CommonIrsNotices() {
  // const [expanded, setExpanded] = useState(false);

  const [value, setValue] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");

  // const [expanded, setExpanded] = useState(false);

  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };
  function displayNotices(lab) {
    // return (
    // <Box>

    //   <NoticeComp i={1} n={label} />
    // </Box>
    // );
    // if (label)

    // if (label)

    if (lab) {
      const findNotice = notices.find((n, i) => {
        if (n.label == lab) return n;
      });

      return (
        // <Box display={"flex"} flexDirection={"column"}>
        <NoticeComp i={1} n={findNotice} />
        // </Box>
      );
    } else {  
      return notices.map((n, i) => (
        // <Box key={i} display={"flex"} flexDirection={"column"}>
        <NoticeComp key={i} i={i} n={n} />
        // </Box>
      ));
    }
  }

  return (
    <Box>
      {/* <Typography
        variant="h3"
        component={"h1"}
        textAlign={"center"}
        color="info.dark"
      >
        Common IRS Notices
      </Typography> */}
      <TitleComp title="Common IRS Notices" />

      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={noticesLabel}
          sx={{ width: 300, marginBottom: 1 }}
          renderInput={(params) => (
            <TextField {...params} label="Select the Notice you received" />
          )}
        />
      </Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        gap={1}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <SkeleBar />
        {displayNotices(value)}
        <SkeleBar />
      </Box>
    </Box>
  );
}

export default CommonIrsNotices;
