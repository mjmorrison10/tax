import { Button, Paper, Box, Typography, Skeleton } from "@mui/material";
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
} from "../public/Settings/baseSettings";
import { blueGrey } from "@mui/material/colors";
import Phase from "../components/index/phase";

const options = [
  "Create a merge commit",
  "Squash and merge",
  "Rebase and merfdsfdsge",
];

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
    <Box
    // sx={{
    //   backgroundColor: "blue",
    //   height: "100vh",
    //   width: "100%",
    // }}
    >
      <Carousel
        sx={{
          minHeight: `${carouselHeight}`,
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>

      <Skeleton
        animation="wave"
        height={8}
        sx={{
          mt: 2,
        }}
      />

      <Box
        minHeight={"100vh"}
        display={'flex'}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        backgroundColor={blueGrey[500]}
      >
        <Paper sx={{p: 1}}>

        <Typography>American's Best Tax Relief Company</Typography>
        <Typography>{companyName}</Typography>
        <Typography>2-Phase Quick Resolution Process</Typography>
        <Box>

          <Phase number={2} title={'Discovery & Strategy'} paragraph={'This preliminary phase starts with a free consultation to assess your financial situation. Then our team of certified professionals will analyze and prepare a resolution plan to present to the IRS on your behalf.'} timeFrame={'Average Time Frame: 24 hrs - 1 month'} />

        </Box>
        </Paper>
      </Box>
    </Box>
  );
}

const paperMbMr = 10;

function Item(props) {
  return (
    <Box
      sx={{
        minHeight: `${carouselHeight}`,
        backgroundImage: `url(${props.item.image})`,
        backgroundSize: "cover",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "fit-content",
          height: "fit-content",
          mb: paperMbMr,
          mr: paperMbMr,
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
            color="secondary"
            sx={{ alignSelf: "flex-end" }}
          >
            {props.item.button}
          </Button>
        )}
      </Paper>
    </Box>
  );
}
