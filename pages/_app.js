import "../styles/globals.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "../components/header";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
});

// function HideOnScroll(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//   });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// HideOnScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// const buttonsTitle = [
//   "get started",
//   "services",
//   "resolved cases",
//   "resources",
//   "about us",
//   "clients",
// ];

// const newButtonsTitle = capWords(buttonsTitle);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Container maxWidth="xl">
        <Box sx={{ my: 2 }}>
          <Component {...pageProps} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;

const html = `
<React.Fragment>
<CssBaseline />
<HideOnScroll {...props}>
  <AppBar>
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Typography variant="h6" component="div">
        Tax Company
      </Typography>

      <ButtonGroup spacing={2} sx={{ gap: 2 }}>
        {newButtonsTitle.map((btn, i) =>
          // i > newButtonsTitle.length - 1 ? (
          i < 1 ? (
            <Button
              variant="contained"
              color="secondary"
              key={i}
              children={btn}
            ></Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              key={i}
              children={btn}
            ></Button>
          )
        )}
      </ButtonGroup>
    </Toolbar>
  </AppBar>
</HideOnScroll>
<Toolbar />
<Container>
  <Box sx={{ my: 2 }}>
    <Component {...pageProps} />
  </Box>
</Container>
</React.Fragment>
`;
