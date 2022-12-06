import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box } from '@mui/system'

export default function GlobalDirectory (): JSX.Element {
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <Box>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Website
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Design & Development</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We deisgn professional website for small businesses & enterprises.
            Just go ahead and start a project and follow the steps to provide us with information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Digital Marketing</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Social Media Marketing  & SEO
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are the leading digital marketing service provider in Ethiopia & East Africa! <br/>
            We have a complete package wich can be configured to suite your business need.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Software as a Service
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Digital Products
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Check out our product page to try and purchase our software products.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
