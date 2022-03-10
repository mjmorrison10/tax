import "../styles/globals.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { blue, grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "../components/header";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[200],
    },
    secondary: {
      main: blue[500],
    }
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container maxWidth="xl">
        <Box sx={{ my: {xs: 2, md: 7, lg: 2} }}>
          <Component {...pageProps} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
