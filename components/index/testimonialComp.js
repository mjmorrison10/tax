import { Box } from "@mui/material";
import React from "react";
import Testimonial from "../testimonial";
import { testimonialsInfo } from "../../public/Settings/baseSettings";

function TestimonialComp(props) {
  const { curPage } = props;

  return (
    <Box
      display={"flex"}
      flexWrap={'wrap'}
      sx={{
        flexDirection: { xs: "column", sm: "row" },
      }}
      justifyContent={"center"}
      alignItems={"center"}
      gap={1}
    >
      {testimonialsInfo.map((test, i) => (
        <Testimonial
          title={test.title}
          comment={test.comment}
          name={test.name}
          starReview={test.starReview}
          date={test.date}
          key={i}
          numb={i}
          curPage={curPage}
        />
      ))}
    </Box>
  );
}

export default TestimonialComp;
