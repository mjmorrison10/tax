import { Box } from "@mui/material";
import React from "react";
import TestimonialsComp from "../../components/testimonialsComp";
import TitleComp from "./components/title";

function Reviews() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      minHeight={"75vh"}
    >
      <TitleComp title="Testimonials" />
      <TestimonialsComp title="Our clients sees us as the Best!" />
    </Box>
  );
}

export default Reviews;
