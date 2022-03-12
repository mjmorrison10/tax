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
import { NavigateNext } from "@mui/icons-material";
import SkeleBar from "../components/SkeleBar";

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
            <Typography variant="h3" component="h2" color="secondary">
              2-Phase Quick Resolution Process
            </Typography>
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            gap={1}
            my={2}
            sx={{
              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
          >
            <Phase
              number={1}
              title={"Discovery & Strategy"}
              paragraph={
                "This preliminary phase starts with a free consultation to assess your financial situation. Then our team of certified professionals will analyze and prepare a resolution plan to present to the IRS on your behalf."
              }
              timeFrame={"24 hrs - 1 month"}
            />
            <NavigateNext
              color="secondary"
              sx={{
                fontSize: "5rem",
                transform: { xs: "rotate(90deg)", sm: "rotate(0deg)" },
              }}
            />
            <Phase
              number={2}
              comp={"h3"}
              title={"Resolution"}
              paragraph={
                "After IRS compliance has been established, we’ll bring you up to date on any and all tax returns. Next, your dedicated Case Manager and Tax Attorney will present your case to the IRS to achieve the best possible resolution. "
              }
              timeFrame={"3-6 months"}
            />
          </Box>
          <Button
            variant="contained"
            color="secondary"
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
