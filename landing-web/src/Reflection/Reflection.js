import Navbar from "../Components/Navbar"
import Lofi from "./Lofi"
import Hifi from "./Hifi"
import Interactive from "./Interactive"
import Usability from "./Usability"

import { Container, Typography, AvatarGroup, Avatar, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function Reflection () {
  return (
    <div className="w-screen">
      <Navbar />
      <Container maxWidth="md">
        <Typography variant="h3" component="h3" sx={{ fontWeight: "bold", color: "#211951", marginTop: "2rem"}}>
          Snowlingo Design
        </Typography>
        <Typography variant="h6" component="h6">
          Navigating the Design Process: From Research to Refinement
        </Typography>
        <div className="flex my-5 align-middle">
          <AvatarGroup total={3} sx={{display: 'flex', alignItems: "center"}}>
            <Avatar alt="Dylan Wang" sx={{ bgcolor: "#FE76FF" }}>D</Avatar>
            <Avatar alt="Luca Wu" sx={{ bgcolor: "#15F5BA" }}>L</Avatar>
            <Avatar alt="Frank Wu" sx={{ bgcolor: "#836FFF" }}>F</Avatar>
          </AvatarGroup>
          <div className="flex flex-col ml-3">
            <Typography variant="subtitle1" component="p">
              Dylan Wang | Luca Wu | Frank Wu
            </Typography>
            <Typography variant="subtitle2" component="p" className="text-gray-500">
              10 minutes read · Apr 28, 2024
            </Typography>
          </div>
        </div>
        <Button
          variant="outlined"
          startIcon={<GitHubIcon />}
          sx={{
            marginBottom: '0.5rem',
            color: "#211951",
            borderColor: "#211951",
            '&:hover': {
              borderColor: "#836FFF",
              color: "#836FFF"
            }
          }}
          onClick={ () => window.location.href='https://github.com/CIS5120-Project/Snowlingo/tree/master/snowlingo-front' }
        >
          Github
        </Button>
        <img
          src="https://snowlingo-images.s3.amazonaws.com/melvin-trav-SYwSFyuSWHI-unsplash.jpg"
          alt="ski background"
          style={{ objectFit: 'cover', height: "500px", width: "100%"}}
        />
        <main className="mt-10 mb-20">
          {/* Introduction */}
          <section className="my-10">
            <Typography variant="h4" component="h4" sx={{ fontWeight: "bold", color: "#211951", marginBottom: "1rem"}}>
              Introduction
            </Typography>
            <Typography variant="h6" component="p">
              In the realm of product design, understanding and fulfilling user needs is not just beneficial—it’s essential. Whether you're developing a digital app or a physical product, the journey from an initial idea to a polished outcome hinges on a meticulously structured design process. This reflection delves into the critical stages of the design journey, each tailored to bridge the gap between user expectations and functional design. From the initial user research, where we explore and unearth the motivations and behaviors of our target audience, through the iterative cycles of prototyping and user testing, to the final stages of refinement and launch, we'll uncover the pivotal roles these phases play in crafting successful and user-centric products. By walking through each step, we aim to provide a comprehensive guide that equips designers with the tools and insights needed to turn conceptual visions into tangible realities.
            </Typography>
          </section>
          {/* Formative User Research Section */}
          <section className="my-10">
            <Typography variant="h4" component="h4" sx={{ fontWeight: "bold", color: "#211951", marginBottom: "1rem"}}>
              Formative User Research
            </Typography>
            <Typography variant="h6" component="p">
              User research forms the cornerstone of product development, especially in niches like snowboarding where enthusiasts' preferences greatly influence design and functionality. The primary focus here is on snowboarding enthusiasts, who range from casual riders to competitive athletes and instructors. These individuals frequent various terrains such as snow parks and backcountry areas, presenting diverse needs and preferences that are crucial for tailored product development.
            </Typography>
            <Typography variant="h5" component="h5" sx={{ fontWeight: "bold", color: "#211951", marginTop: '1rem', marginBottom: '0.5rem'}}>
              Brainstorming and Identification
            </Typography>
            <Typography variant="h6" component="p">
              The initial brainstorming focuses on identifying key aspects of snowboarders' experiences, including gear preferences, technology usage, and learning behaviors. Snowboarders not only seek performance in their equipment but also value the integration of technology that enhances safety and community engagement.
            </Typography>
            <Typography variant="h5" component="h5" sx={{ fontWeight: "bold", color: "#211951", marginTop: '1rem', marginBottom: '0.5rem'}}>
              Developing the Interview Guide
            </Typography>
            <Typography variant="h6" component="p">
              A structured interview guide is critical to navigate the research topics effectively:
            </Typography>
            <ol className="mt-4">
              <li>
                <Typography variant="h6" component="p">
                  1. <strong>Gear and Equipment: </strong>Investigating preferences, challenges, and specific brand loyalties concerning snowboarding gear.
                </Typography>
              </li>
              <li>
                <Typography variant="h6" component="p">
                  2. <strong>Technology Integration: </strong>Understanding how snowboarders use apps and wearables to track performance and interact with the community.
                </Typography>
              </li>
              <li>
                <Typography variant="h6" component="p">
                  3. <strong>Learning and Engagement: </strong>Exploring methods snowboarders employ to learn new techniques and engage with the community, both online and offline.
                </Typography>
              </li>
              <li>
                <Typography variant="h6" component="p">
                  3. <strong>Safety and Navigation: </strong>Addressing concerns related to navigating unfamiliar terrains and safety precautions during snowboarding.
                </Typography>
              </li>
            </ol>
            <Typography variant="h5" component="h5" sx={{ fontWeight: "bold", color: "#211951", marginTop: '1rem', marginBottom: '0.5rem'}}>
              Execution: Plan, Recruit, and Interview
            </Typography>
            <Typography variant="h6" component="p">
              The recruitment targets active snowboarding participants through social media and local snowboarding clubs, ensuring a representation from beginners to advanced practitioners. Interviews are structured yet flexible to allow for spontaneous insights, focusing on gathering qualitative data to deeply understand the users' experiences and needs.
            </Typography>
            <Typography variant="h5" component="h5" sx={{ fontWeight: "bold", color: "#211951", marginTop: '1rem', marginBottom: '0.5rem'}}>
              Data Evaluation
            </Typography>
            <Typography variant="h6" component="p">
              Post-interview, the data undergoes thorough analysis to pinpoint key needs, pain points, and design opportunities. This step is crucial in transitioning from raw data to actionable insights that drive the design process forward, particularly influencing the development of prototypes that directly address the users' identified needs.
              <br/><br/>
              By meticulously understanding and analyzing snowboarding enthusiasts' behaviors and preferences, this user research phase lays a solid foundation for developing user-centered design solutions that enhance the snowboarding experience.
            </Typography>
          </section>
          <Lofi />
          <Hifi />
          <Interactive />
          <Usability />
          <section className="my-10">
            <Typography variant="h4" component="h4" sx={{ fontWeight: "bold", color: "#211951", marginBottom: "1rem"}}>
              Next Steps
            </Typography>
            <Typography variant="h6" component="p">
              Moving forward, we will harness the insights gained from our usability study to elevate the application’s user experience. We plan to implement structured input fields with dropdown selections for more consistent data entry, enhance navigational cues for a seamless user journey, and introduce user-driven customization for personal workspace layouts. These improvements aim to streamline the user interface, minimize cognitive load, and foster a more personalized interaction with the app. Meanwhile, we want to focus on the whole customized course learning experience so as to provide the snowboarding/skiing course special for all the individual users.
            </Typography>
          </section>
        </main>
      </Container>
    </div>
  );
};

export default Reflection;
