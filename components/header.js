import React, { useState } from "react";
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
import { Button, ButtonGroup, Modal } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Close, Menu, PhoneCallback } from "@mui/icons-material";
import SplitButton from "./splitButton";

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

const style = {
  position: "absolute",
  top: "5vh",
  left: "5vw",
  width: "90vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: 1,
  overflow: "scroll",

  // transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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

function Header(props) {
  const [open, setOpen] = useState(false);

  const activateModal = () => {
    !open ? setOpen(true) : setOpen(false);
  };

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

            <Box
              onClick={() => {
                activateModal();
              }}
            >
              {!open ? (
                <Menu sx={{ display: { xs: "block", md: "none" } }} />
              ) : (
                <Close sx={{ display: { xs: "block", md: "none" } }} />
              )}
            </Box>

            <Modal
              open={open}
              onClose={activateModal}
              aria-labelledby="Navbar"
              aria-describedby="Navigation bar"
              sx={{
                overflow: "scroll",
              }}
            >
              <Box sx={style}>
                <Close
                  onClick={() => {
                    activateModal();
                  }}
                />
                <ButtonGroup
                  sx={{
                    gap: 2,
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {objButton.map((btn, i) => (
                    <SplitButton
                      variant={`contained`}
                      color={"secondary"}
                      key={i}
                      title={`${btn.title}`}
                      menuOptions={btn.menuTitle}
                      sx={{
                        width: "100%",
                      }}
                    ></SplitButton>
                  ))}

                  <Button
                    endIcon={<PhoneCallback />}
                    variant="contained"
                    color="primary"
                  >
                    Free Consultation
                  </Button>
                </ButtonGroup>
              </Box>
            </Modal>

            <ButtonGroup
              spacing={2}
              sx={{
                py: 1,
                gap: 2,
                display: { xs: "none", md: "inherit" },
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              {objButton.map((btn, i) => (
                <SplitButton
                  variant={`contained`}
                  color={"secondary"}
                  key={i}
                  title={`${btn.title}`}
                  menuOptions={btn.menuTitle}
                ></SplitButton>
              ))}

              <Button
                endIcon={<PhoneCallback />}
                variant="contained"
                color="primary"
              >
                <Box
                  sx={{
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="caption" component="div">Free Consultation</Typography>
                  <Typography variant="caption" component="div">(714) 555 - 1930</Typography>
                </Box>
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
