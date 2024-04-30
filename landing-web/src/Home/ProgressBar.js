import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import PhonelinkIcon from '@mui/icons-material/Phonelink';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import CodeIcon from '@mui/icons-material/Code';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import Typography from '@mui/material/Typography';

function ProgressBar() {
  return (
    <Timeline position="right" style={{ marginLeft: '10rem'}}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <PeopleAltIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} className="flex flex-col align-middle">
          <Typography variant="h6" component="h6">
            User Research
          </Typography>
          <Typography variant="body1" component="span">
            Understanding your target users
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <StickyNote2Icon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Lo-Fi Prototype
          </Typography>
          <Typography>Quickly visualizing and testing ideas</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ backgroundColor: "#836FFF"}}>
            <ColorLensIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Hi-Fi Prototype
          </Typography>
          <Typography>Closer to the final product in terms of details</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ backgroundColor: "#15F5BA" }}>
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Interactive Prototype
          </Typography>
          <Typography>Turning hi-fi prototypes into interactive ones</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ backgroundColor: "#211951"}}>
            <AccessibilityIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Controlled Usability Study
          </Typography>
          <Typography>A structured study to test the usability of the product</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ backgroundColor:"#FE76FF", width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <PhonelinkIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Application Refinement
          </Typography>
          <Typography>Refine the application base on feedback</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default ProgressBar;
