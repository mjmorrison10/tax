import {
  Button,
  Paper,
  Box,
  Typography,
  Skeleton,
  Pagination,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import SplitButton from "../components/splitButton";
import styles from "../styles/Home.module.css";
import {
  companyName,
  companyPhoneNumber,
  carouselHeight,
  carouselDotsHeight,
  testimonialsInfo,
} from "../public/Settings/baseSettings";
import { blueGrey } from "@mui/material/colors";
import Phase from "../components/index/phase";
import { NavigateNext } from "@mui/icons-material";
import SkeleBar from "../components/SkeleBar";
import Testimonial from "../components/testimonial";
import TestimonialComp from "../components/index/testimonialComp";
import { useState } from "react";
import TestimonialsComp from "../components/testimonialsComp";
import PhaseProcessComp from "../components/PhaseProcessComp";

export default function Home(props) {
  const items = [
    {
      name: `Are you in need of tax relief?`,
      description: `Let us help you. Take our 30-second survey or give us a call at ${companyPhoneNumber} to see if you qualify!`,
      button: null,
      image: "/images/stressed-laptop.jpg",
    },
    {
      name: `Get Tax Relief from the IRS`,
      description: `Learn How ${companyName} can help you!`,
      button: "Get Help Now",
      image: "/images/businesss-meeting.jpg",
    },
    {
      name: `Do you Qualify for Instant Tax Relief?`,
      description: `Fill out our 30-second qualify form to find out!`,
      button: "Qualify Now",
      image: "/images/rejoicing.jpg",
    },
  ];

  return (
    <Box>
      <Carousel
        sx={{
          minHeight: { xs: "fit-content" },
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>

      <SkeleBar />

      <Box
        minHeight={"80vh"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Paper sx={{ p: 2, textAlign: "center" }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              gap: { xs: 1, sm: 3 },
            }}
          >
            <Typography variant="caption">
              {`American's Best Tax Relief Company`}
            </Typography>
            <Typography variant="h4" component="p" fontWeight={"bold"}>
              {companyName}
            </Typography>
          </Box>

          <PhaseProcessComp />

          <Button
            variant="contained"
            color="info"
            size="large"
            sx={{
              width: { xs: "100%", sm: "fit-content" },
              fontWeight: "bolder",
            }}
          >
            Speak with a Tax Expert!
          </Button>
        </Paper>
      </Box>
      <SkeleBar />

      <TestimonialsComp margin={{ xs: 2, md: 5 }} />

      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        paddingX={1}
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box width={"50%"}>
          <Typography
            variant="h6"
            component={"div"}
            color={"info.dark"}
            gutterBottom
          >
            Find out why so many people are using {companyName}
          </Typography>
          <Typography variant="body" color={"text.secondary"} gutterBottom>
            {`Just answer a few short questions to find out if you're eligible to
            have your tax debt reduced significantly or completely eliminated!`}
          </Typography>
        </Box>
        <Button
          color="info"
          variant="contained"
          sx={{ marginTop: { xs: 1, md: 0 } }}
        >
          Check out now!
        </Button>
      </Box>
    </Box>
  );
}

const paperMbMr = 10;

function Item(props) {
  return (
    <Box
      sx={{
        minHeight: { xs: `100vh`, sm: `${carouselHeight}` },
        backgroundImage: `url(${props.item.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        alignItems: { xs: "center", sm: "flex-end" },
        justifyContent: { xs: "center", sm: "flex-end" },
      }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "fit-content",
          height: "fit-content",
          mb: { md: paperMbMr, xs: "0" },
          mr: { md: paperMbMr, xs: "0" },
          m: { xs: 1, md: null },
          p: 2,
          backgroundColor: "rgba(200, 200, 200, 0.5)",
        }}
      >
        <Typography variant="h3" component="div">
          {props.item.name}
        </Typography>
        <Typography variant="h5" component="div" sx={{ maxWidth: "45ch" }}>
          {props.item.description}
        </Typography>

        {props.item.button && (
          <Button
            variant="contained"
            color="info"
            sx={{ alignSelf: "flex-end" }}
          >
            {props.item.button}
          </Button>
        )}
      </Paper>
    </Box>
  );
}
