import { Typography, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

function Interactive () {
  return (
    <section className="my-10">
      <Typography variant="h4" component="h4" sx={{ fontWeight: "bold", color: "#211951", marginBottom: "1rem"}}>
        Interactive Prototyping
      </Typography>
      <Button
        variant="outlined"
        startIcon={<GitHubIcon />}
        sx={{
          marginBottom: '0.5rem',
          color: "#836FFF",
          borderColor: "#836FFF",
          '&:hover': {
            borderColor: "#211951",
            color: "#211951"
          }
        }}
        onClick={ () => window.location.href='https://github.com/CIS5120-Project/Snowlingo/tree/master/snowlingo-front' }
      >
        Github Link
      </Button>
      <Typography variant="h6" component="p">
        While developing our interactive prototype with React, we brought static designs to life, closely mirroring actual usage to impress upon our team and stakeholders the functional depth of our product. User testing proved vital, revealing insights that we leveraged to hone the interface, aligning it with user needs for intuitive navigation.
        <br/><br/>
        In showcasing the prototype, we emphasized how user input had been integrated, particularly the functionalities enabled by React, spotlighting enhancements and their contributions to the user experience. This presentation was crucial in garnering stakeholder support, laying the groundwork for the next phase of development.
        <br/><br/>
        Feedback from user evaluations pinpointed improvements—refining the logo for visual impact, implementing an interactive tutorial for ease of use, allowing users to amend their details post-signup, and personalizing the workspace to user preferences. These refinements are set to boost user engagement and overall platform efficiency.
      </Typography>
    </section>
  )
}

export default Interactive;
