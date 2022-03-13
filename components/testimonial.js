import { StarRounded } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
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

  const starArr = Array(starReview).fill(starReview);

  // if (numb < 3) return null;


  if (currentPage == 1 && numb > 2) return null;
  if (currentPage == 2 && (numb > 5 || numb < 3)) return null;
  if (currentPage == 3 && (numb > 8 || numb < 6)) return null;
  if (currentPage == 4 && (numb > 11 || numb < 9)) return null;


  return (
    <Paper
    sx={{
        backgroundColor: 'primary.light',
        maxWidth: "20rem",
        px: 2,
        py: 1,
      }}
    >
      <Typography variant="h5" component={"p"} fontWeight={"bold"}>
        {ellipWords(title, 25)}
      </Typography>
      <Typography
        variant="body"
        component={"p"}
        sx={{ textOverflow: "ellipsis" }}
      >
        {ellipWords(comment, 100)}
      </Typography>
      <Typography variant="subtitle1" fontWeight={"bold"}>
        {name}
      </Typography>

      <Box display={"flex"} gap={1} justifyContent={"space-between"}>
        <Typography variant="overline">{date}</Typography>
        <Box display={"flex"} gap={0.5}>
          {starArr.map((star, i) => (
            <StarRounded
              key={i}
              color="info"
              fontSize="small"
              sx={{
                backgroundColor: "primary.light",
                h: "100%",
                w: "100%",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* <StarRounded key={i} />; */}
    </Paper>
  );
}

export default Testimonial;
