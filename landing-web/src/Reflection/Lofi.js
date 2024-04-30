import { Typography } from "@mui/material";

function Lofi () {
  return (
    <section className="my-10">
      <Typography variant="h4" component="h4" sx={{ fontWeight: "bold", color: "#211951", marginBottom: "1rem"}}>
        Lo-Fi Prototyping
      </Typography>
      <Typography variant="h6" component="p">
        The goal of designing this web/app(SnowLingo) is to liberalize learning skiing and snowboarding, providing personalized and interactive experiences for learners, and guides users to advanced levels while fostering a supportive community by integrating gamification challenges, community features, real-world interaction, performance tracking and analysis, and tailored gear advising.
      </Typography>
      <Typography variant="h5" component="h5" sx={{ fontWeight: "bold", color: "#211951", marginTop: '1rem', marginBottom: '0.5rem'}}>
        Parallel Paper Prototypes
      </Typography>
      <Typography variant="h6" component="p">
        One particularly effective strategy within lo-fi prototyping is parallel paper prototyping. This approach involves creating multiple versions of a concept simultaneously, enabling design teams to explore different solutions and quickly identify the most promising ones. Parallel paper prototyping facilitates a dynamic exploration of ideas, where different iterations can be tested side by side. This direct comparison accelerates the decision-making process, as it allows designers and stakeholders to visually and practically evaluate the strengths and weaknesses of each version against real-world user feedback.
      </Typography>
      <img
        src="https://snowlingo-images.s3.amazonaws.com/lofi.png"
        alt="lofi"
        style={{objectFit: "cover", width: "100%", margin: '2rem 0'}}
      />
      <Typography variant="h5" component="h5" sx={{ fontWeight: "bold", color: "#211951", marginTop: '1rem', marginBottom: '0.5rem'}}>
        Evaluation
      </Typography>
      <Typography variant="h6" component="p">
        Evaluating the low-fidelity prototype for a snowboarding learning and social platform revealed valuable insights. Users appreciated the structured learning pathway and the intuitive navigation it offered. However, they highlighted a need for clearer instructions to seamlessly transition between lessons and the interactive resort map. Beginners and tech-savvy users alike requested a more personalized experience, suggesting adaptive lesson pacing and immediate feedback mechanisms.
        <br/><br/>
        The feedback indicated the potential for a more social and engaging learning environment. Users expressed a desire for community-driven features such as reviews and resort experiences to enrich the decision-making process. Additionally, there was an interest in integrating direct booking options and real-time resort data, suggesting a seamless link between learning and action.
        <br/><br/>
        The importance of visibility and accessibility in the interface design was noted, particularly for features like input boxes in the AI-driven components. Users also sought gamified elements to make learning new techniques more enjoyable. Incorporating these elements could lead to a more immersive and interactive experience, enhancing both the individual's learning curve and the collective community engagement on the platform.
      </Typography>
    </section>
  )
}

export default Lofi;
