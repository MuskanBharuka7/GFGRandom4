    import * as React from 'react';
    import Accordion from '@mui/material/Accordion';
    import AccordionSummary from '@mui/material/AccordionSummary';
    import AccordionDetails from '@mui/material/AccordionDetails';
    import Typography from '@mui/material/Typography';
    import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
    import {Link} from '@mui/material';
    export default function SimpleAccordion() {
      return (
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Task 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Your Task is to follow GFG RCOEM Chapter on  &nbsp; 
              <Link href="https://www.instagram.com/gfg_rcoem_chapter/?igshid=MmIxOGMzMTU%3D">
               Instagram  &nbsp; 
              </Link>
               and  &nbsp; 
              <Link href="https://www.linkedin.com/in/geeksforgeeks-rcoem-chapter-b6b4121bb/?original_referer=https%3A%2F%2Flinktr.ee%2F">
                LinkedIn</Link>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Task 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
            Your Task is to follow GFG RCOEM Chapter on  &nbsp; 
              <Link href="https://www.instagram.com/gfg_rcoem_chapter/?igshid=MmIxOGMzMTU%3D">
               Instagram  &nbsp; 
              </Link>
               and  &nbsp; 
              <Link href="https://m.youtube.com/channel/UCo8rSfTC-3qxSbEVe8zVVFQ?sub_confirmation=1">
                YouTube</Link>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Task 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
            Your Task is to follow GFG RCOEM Chapter on  &nbsp; 
              <Link href="https://www.instagram.com/gfg_rcoem_chapter/?igshid=MmIxOGMzMTU%3D">
               Instagram  &nbsp; 
              </Link>
               and  &nbsp; 
              <Link href="https://discord.gg/KJXRyJQ3">
                Discord</Link>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Task 4</Typography>
            </AccordionSummary>
            <AccordionDetails>
            Your Task is to follow GFG RCOEM Chapter on  &nbsp; 
              <Link href="https://www.instagram.com/gfg_rcoem_chapter/?igshid=MmIxOGMzMTU%3D">
               Instagram  &nbsp; 
              </Link>
               and  &nbsp; 
              <Link href="https://chat.whatsapp.com/BFQoQiFBqVGFPqLrGuXX4N">
                Whatsup</Link>
            </AccordionDetails>
          </Accordion>
        </div>
      );
    }
    

