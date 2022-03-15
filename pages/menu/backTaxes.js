import { Box, Typography } from "@mui/material";
import React from "react";
import { backTaxesInfo } from "../../public/Settings/baseSettings";

function backTaxes() {
  return (
    <Box>
      {backTaxesInfo.map((info, i) => (
        <Box display={'flex'} flexDirection={'column'} gap={1} >
          <Typography variant="h4" component={'h2'} color='info.dark' >{info.title}</Typography>
          <Typography variant='body'>{info.paragraph}</Typography>
          {info.paragraph2 && <Typography variant='body'>{info.paragraph2}</Typography>}
          {info.paragraph3 && <Typography variant='body'>{info.paragraph3}</Typography>}
          {info.paragraph4 && <Typography variant='body'>{info.paragraph4}</Typography>}
          {info.paragraph5 && <Typography variant='body'>{info.paragraph5}</Typography>}
          {info.paragraph6 && <Typography variant='body'>{info.paragraph6}</Typography>}
          {info.paragraph7 && <Typography variant='body'>{info.paragraph7}</Typography>}
          {info.list && <Typography variant='body'>{info.list}</Typography>}
          {info.list2 && <Typography variant='body'>{info.list2}</Typography>}
          {info.list3 && <Typography variant='body'>{info.list3}</Typography>}
        </Box>
      ))}
    </Box>
  );
}

export default backTaxes;
