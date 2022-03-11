import { Button, Paper, Box, Typography } from "@mui/material";
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
    </Box>
    //  <Box>
    //    <Button variant="contained">index.js</Button>
    //    <SplitButton title={"test"} options={options}/>
    //    <Box sx={{
    //      backgroundColor: "blue",
    //      height: "100vh"
    //    }}>
    //    </Box>
    //  </Box>
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
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
      }}
    >
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: "fit-content",
          height: "fit-content",
          mb: paperMbMr,
          mr: paperMbMr,
          p: 2,
          backgroundColor: "rgba(200, 200, 200, 0.4)"
        }}
      >
        <Typography variant="h3" component="div">
          {props.item.name}
        </Typography>
        <Typography variant="h5" component="div">
          {props.item.description}
        </Typography>

        {props.item.button && (
          <Button variant="contained" color="secondary"
          sx={{alignSelf: 'flex-end'}}>
            {props.item.button}
          </Button>
        )}
      </Paper>
    </Box>
  );
}
