import { Backdrop, CircularProgress, Typography } from "@mui/material";
import React from "react";
import PageComingSoon from "../components/pageComingSoon";

function clients() {
  // const [open, setOpen] = React.useState(true);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };

  return (
    <div>
      <PageComingSoon />
      {/* <Backdrop
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="info" />
        <Typography color="info.light">Page coming soon</Typography>
      </Backdrop> */}
    </div>
  );
}

export default clients;
