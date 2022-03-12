import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import camWords from "./camWords";
import Link from "next/link";

export default function SplitButton(props) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  let text;

  const handleClick = (e) => {
    text = e.target.innerText;
    // console.log(camWords(text));

    // console.info(`You clicked ${e.target.innerText}`);
  };
  // const handleClick = () => {
  //   console.info(`You clicked ${props.menuOptions[selectedIndex]}`);
  // };

  const handleMenuItemClick = (event, index) => {
    props.isModalOpen ? props.modal() : null;
    text = event.target.innerText;
    console.log(camWords(text));
    // console.log(event.target.innerText);
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    props.menuOptions.length === 0 && props.isModalOpen ? props.modal() : null;
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <Link
        href={props.menuOptions.length === 0 ? `/${camWords(props.title)}` : ""}
        passHref
     >
        <Button
          onClick={(e) => {
            handleToggle();
            handleClick(e);
          }}
          variant={props.variant}
          color={props.color}
          // children={props.children}
          ref={anchorRef}
          aria-label="split button"
          sx={{ zIndex: "10", height: "fit-content" }}
          endIcon={props.menuOptions.length > 0 ? <ArrowDropDownIcon /> : null}
        >
          {props.title}
        </Button>
      </Link>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ zIndex: 11 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {props.menuOptions.map((option, index) => (
                    <Link
                      key={option}
                      href={
                        option !== undefined ? `/menu/${camWords(option)}` : ""
                      }
                      passHref
                    >
                      <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    </Link>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
