import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  // marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function CardComp({
  question = "question",
  answer = "answer",
  answerTitle,
  mwComp = "50ch",
}) {
  const [expanded, setExpanded] = React.useState(false);
  const [borderRadius, setBorderRadius] = React.useState(null);
  const [color, setColor] = React.useState("info.light");

  const handleExpandClick = () => {
    setExpanded(!expanded);
    !expanded ? setBorderRadius(2) : setBorderRadius(null);
    !expanded ? setColor("secondary.light") : setColor("info.light");
  };

  return (
    <Card
      raised
      sx={{
        maxWidth: mwComp,
        minHeight: { xs: "fit-content", md: 175 },
        minWidth: { xs: "95%", sm: 425 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardHeader title={question} subheader={answerTitle} />
      {/* <CardHeader title={answerTitle} /> */}

      <Box
        display={"flex"}
        width={"100%"}
        justifyContent={"center"}
        bgcolor={color}
        borderRadius={borderRadius}
      >
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{answer}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default CardComp;
