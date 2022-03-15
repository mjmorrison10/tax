import { Box, Pagination, Typography } from "@mui/material";
import React, { useState } from "react";
import { testimonialsInfo } from "../public/Settings/baseSettings";
import Testimonial from "./testimonial";

function TestimonialsComp({ margin, title = 'Our Clients sees the value in us!' }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(testimonialsInfo.length / 3);

  function handlePageChange(e) {
    const numb = e.target.innerText;

    if (!isNaN(numb)) {
      setCurrentPage(numb);
    }
  }
  console.log(title);

  return (
    <Box my={margin}>
      <Typography
        variant="h3"
        component={"h2"}
        color="info.main"
        textAlign={"center"}
        gutterBottom
      >
        {title}
        {/* Our Clients sees the value in us! */}
      </Typography>

      <Pagination
        color="info"
        count={totalPages}
        onChange={handlePageChange}
        hideNextButton={true}
        hidePrevButton={true}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 1,
        }}
        // renderItem={testimonialComp}
      />

      <Box
        display={"flex"}
        flexWrap={"wrap"}
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
            currentPage={currentPage}
            setCurrentPage
          />
        ))}
      </Box>
    </Box>
  );
}

export default TestimonialsComp;
