import "../styles/globals.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { blue, grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "../components/header";
import Footer from "../components/footer";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[200],
    },
    // secondary: {
    //   main: blue[500],
    // },
    info: {
      main: blue[500],
    },
  },
});

theme.typography.h3 = {
  fontSize: "3rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: blue[50] }}>
        <Header />
        <Container maxWidth="xl">
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              mt: { xs: 2, md: 9, lg: 2 },
            }}
          >
            <Component {...pageProps} />
            <Footer />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;
