import { Star, StarRounded } from "@mui/icons-material";
import { Box, Paper, Rating, Typography } from "@mui/material";
import React from "react";
import ellipWords from "./ellipWords";

function Testimonial(props) {
  // const title = props.title;
  // const comment = props.comment;
  // const name = props.name;
  // const starReview = props.starReview;
  // const date = props.date;
  // const numb = props.numb;
  const { title, comment, name, starReview, date, numb, currentPage } = props;

  // const starArr = Array(starReview).fill(starReview);

  if (currentPage == 1 && numb > 2) return null;

  if (
    currentPage > 1 &&
    (numb > currentPage * 3 - 1 || numb < currentPage * 3 - 3)
  )
    return null;

  // if (> (currentPage * 2 - 1))
  // if (currentPage == 2 && (numb > 5 || numb < 3)) return null;
  // if (currentPage == 3 && (numb > 8 || numb < 6)) return null;
  // if (currentPage == 4 && (numb > 11 || numb < 9)) return null;

  return (
    <Paper
      sx={{
        backgroundColor: "primary.light",
        maxWidth: "20rem",
        px: 2,
        py: 1,
      }}
    >
      <Typography variant="h5" component={"p"} fontWeight={"bold"} noWrap>
        {/* {ellipWords(title, 23)} */}
        {title}
      </Typography>
      <Typography
        variant="body"
        component={"p"}
        sx={{ textOverflow: "ellipsis" }}
      >
        {ellipWords(comment, 100)}
        {/* {comment} */}
      </Typography>
      <Typography variant="subtitle1" fontWeight={"bold"}>
        {name}
      </Typography>

      <Box display={"flex"} gap={1} justifyContent={"space-between"}>
        <Typography variant="overline">{date}</Typography>
        <Rating
          name="half-rating-read"
          defaultValue={starReview}
          precision={0.5}
          readOnly
          icon={<Star color="info" />}
        />
      </Box>
    </Paper>
  );
}

export default Testimonial;
