import React from "react";
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
import { Button, ButtonGroup } from "@mui/material";
import { grey } from "@mui/material/colors";
import { PhoneCallback } from "@mui/icons-material";
import SplitButton from "./splitButton";

const options = [
  "Create a merge commit",
  "Squash and merge",
  "Rebase and merfdsfdsge",
];

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

const buttonsTitleObj = {
  name: [
    "get started",
    "services",
    "resolved cases",
    "resources",
    "about us",
    "clients",
  ],
  menuItems: {
    "get started": [],
    services: [
      "Free Tax Consultation",
      "IRS Fresh Start Program",
      "Tax Resolution",
      "Tax Preparation",
      "Back Taxes",
      "Unfiled Taxes",
    ],
    "resolved cases": ["Success Stores", "Tax Company Reviews"],
    resources: [
      "Frequently Asked Questions",
      "Common IRS Notices",
      "Legitimate Tax Relief",
      "When You Need a Tax Attorney",
      "Tax Liabilities and Bankruptcy",
      "Tax Blog & News",
    ],
    "about us": [
      "Our Team",
      "Our Accreditation",
      "Our Guarantees",
      "Careers",
      "Contact Us",
    ],
    clients: [],
  },
};

const objButton = [
  {
    title: "get started",
    menuTitle: [],
  },
  {
    title: "services",
    menuTitle: [
      "Free Tax Consultation",
      "IRS Fresh Start Program",
      "Tax Resolution",
      "Tax Preparation",
      "Back Taxes",
      "Unfiled Taxes",
    ],
  },
  {
    title: "resolved cases",
    menuTitle: ["Success Stores", "Tax Company Reviews"],
  },
  {
    title: "resources",
    menuTitle: [
      "Frequently Asked Questions",
      "Common IRS Notices",
      "Legitimate Tax Relief",
      "When You Need a Tax Attorney",
      "Tax Liabilities and Bankruptcy",
      "Tax Blog & News",
    ],
  },
  {
    title: "about us",
    menuTitle: [
      "Our Team",
      "Our Accreditation",
      "Our Guarantees",
      "Careers",
      "Contact Us",
    ],
  },
  {
    title: "clients",
    menuTitle: [],
  },
];

objButton.map((btn) => {
  console.log(btn.menuTitle);
});

// console.log(
//     buttonsTitleObj
// );

// buttonsTitleObj.name.map(btn => {
//   console.log(
//       buttonsTitleObj.menuItems.
//   );
// })

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
              {objButton.map((btn, i) => (
                <SplitButton
                  variant={`contained`}
                  color={"secondary"}
                  key={i}
                  title={`${btn.title}`}
                  menuOptions={btn.menuTitle}
                ></SplitButton>
              ))}
              {/* {objButton.map((btn, i) =>
                i < 1 ? (
                  <Button
                    variant="contained"
                    color="secondary"
                    key={i}
                    children={btn.title}
                  ></Button>
                ) : (
                  <Button
                    variant={"contained"}
                    color="secondary"
                    key={i}
                    children={btn.title}
                  ></Button>
                )
              )} */}
              <Button
                endIcon={<PhoneCallback />}
                variant="contained"
                color="primary"
              >
                Free Consultation
              </Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}

export default Header;
