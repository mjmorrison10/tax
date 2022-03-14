import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React, { useState } from 'react'

function NoticeComp({n, i}) {
  console.log(n)
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
    expanded={expanded === `panel${i}`}
    onChange={handleChange(`panel${i}`)}
    sx={{  width: '65ch' }}
  >
    <AccordionSummary
      expandIcon={<ExpandMore />}
      aria-controls="panel1bh-content"
      id="panel1bh-header"
    >
      <Typography color='info.main' component={'h2'} fontWeight={'bold'} sx={{ width: "33%", flexShrink: 0 }}>
        {n.label}
      </Typography>
      <Typography sx={{ color: "text.secondary" }}>
        {n.title}
      </Typography>
    </AccordionSummary>
    <AccordionDetails
      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
    >
      <Typography variant="body" component={'h3'} fontWeight={"bold"}>
       {`What it's saying`}
      </Typography>
      <Typography variant="body">{n.saying}</Typography>
      {n.saying2 && <Typography variant="body">{n.saying2}</Typography>}

      {n.list && (
        <Box component={"ul"} display={"flex"} flexDirection={"column"}>
          {n.list && (
            <Typography variant="body" component={"li"}>
              {n.list}
            </Typography>
          )}
          {n.list2 && (
            <Typography variant="body" component={"li"}>
              {n.list2}
            </Typography>
          )}
          {n.list3 && (
            <Typography variant="body" component={"li"}>
              {n.list3}
            </Typography>
          )}
        </Box>
      )}

      {n.saying3 && <Typography variant="body">{n.saying3}</Typography>}
      <Typography variant="body" component={'h3'} fontWeight={"bold"}>
        How to resolve it
      </Typography>
      <Typography variant="body">{n.resolve}</Typography>
      {n.resolve2 && (
        <Typography variant="body">{n.resolve2}</Typography>
      )}
      {n.resolve3 && (
        <Typography variant="body">{n.resolve3}</Typography>
      )}
    </AccordionDetails>
  </Accordion>
  )
}

export default NoticeComp