import React from 'react'
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import capWords from "../components/capWords";
import { Button, ButtonGroup, Stack } from "@mui/material";



function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  
  const buttonsTitle = [
    "get started",
    "services",
    "resolved cases",
    "resources",
    "about us",
    "clients",
  ];
  
  const newButtonsTitle = capWords(buttonsTitle);


function Header(props) {
  return (
    <React.Fragment>
    <CssBaseline />
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
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
 
  </React.Fragment>
  )
}

export default Header