import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { style } from "./apply";
import Link from "next/link";
import {
  linearProgressHeight,
  linearProgressTopMd,
  linearProgressTopXsLg,
} from "../public/getStarted/ApplySettings";
import { blue } from "@mui/material/colors";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

function prompted() {
  const linearProgressValue = 0;

  const formLabelStyle = {
    bgcolor: "primary.main",
    alignSelf: "center",
    width: "85%",
    // mt: 0, pr: 2
  };

  const formCheckboxStyle = {
    color: "info.main",
    "&.Mui-checked": {
      color: "info.main",
    },
  };

  const buttonLabels = [
    "Received IRS notice",
    "Garnishment, lien or levy",
    "Unpaid taxes",
    "Other",
  ];

  return (
    <Box sx={style}>
      {buttonLabels.map(label => {
        <div key={label}>test</div>
      })}
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          top: {
            xs: linearProgressTopXsLg,
            md: linearProgressTopMd,
            lg: linearProgressTopXsLg,
          },
        }}
      >
        <LinearProgress
          variant="determinate"
          color="info"
          value={linearProgressValue}
          sx={{ height: linearProgressHeight }}
        />
      </Box>

      <Paper
        sx={{
          p: 4,
        }}
      >
        <Typography variant="h6" component={"h2"}>
          What made you decide to seek tax relief?
        </Typography>
        <Typography
          variant="subtitle2"
          component={"p"}
          sx={{ textAlign: "center" }}
        >
          (Select all that apply)
        </Typography>

        <FormGroup sx={{ gap: 1, my: 1 }}>
          <FormControlLabel
            sx={formLabelStyle}
            control={<Checkbox sx={formCheckboxStyle} />}
            label="Received IRS notice"
          />
          <FormControlLabel
            sx={formLabelStyle}
            control={<Checkbox sx={formCheckboxStyle} />}
            label="Garnishment, lien or levy"
          />
          <FormControlLabel
            sx={formLabelStyle}
            control={<Checkbox sx={formCheckboxStyle} />}
            label="Unpaid taxes"
          />
          <FormControlLabel
            sx={formLabelStyle}
            control={<Checkbox sx={formCheckboxStyle} />}
            label="Other"
          />
        </FormGroup>

        <ButtonGroup fullWidth>
          <Link href="/apply" passHref>
            <Button color="info" startIcon={<ArrowBack />}>
              Back
            </Button>
          </Link>
          <Link href="/unfiledTaxes" passHref>
            <Button color="info" endIcon={<ArrowForward />}>
              Next
            </Button>
          </Link>
        </ButtonGroup>
      </Paper>
    </Box>
  );
}

export default prompted;
