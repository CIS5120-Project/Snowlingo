import { Typography } from "@mui/material";

function Hifi () {
  return (
    <section className="my-10">
      <Typography variant="h4" component="h4" sx={{ fontWeight: "bold", color: "#211951", marginBottom: "1rem"}}>
        Hi-Fi Prototyping
      </Typography>
      <Typography variant="h5" component="h5" sx={{ fontWeight: "bold", color: "#211951", marginTop: '1rem', marginBottom: '0.5rem'}}>
        Using Figma
      </Typography>
      <Typography variant="h6" component="p">
        In our journey, Figma emerged as a beacon for high-fidelity prototyping. We harnessed its collaborative capabilities to develop interactive prototypes that felt almost indistinguishable from the final product. Our team worked in unison within Figma’s shared environment, which drastically streamlined our feedback loops and design refinements.
      </Typography>
      <Typography variant="h5" component="h5" sx={{ fontWeight: "bold", color: "#211951", marginTop: '1rem', marginBottom: '0.5rem'}}>
        Mood Board
      </Typography>
      <Typography variant="h6" component="p">
        We crafted a mood board within Figma that became the soul of our product’s visual direction. This digital collage, brimming with selected colors, textures, and type, guided us through the aesthetic narrative of our design. It was more than a reference; it was a vision that continually reminded us of the emotional resonance we aimed to achieve with our user base.
      </Typography>
      <img
        src="https://snowlingo-images.s3.amazonaws.com/moodboard.png"
        alt="moodboard"
        style={{objectFit: "cover", width: "100%", margin: '2rem 0'}}
      />
      <Typography variant="h6" component="p">
        Beside, as a refrenece for the creation of our design system, we have collected some relative color patterns.
      </Typography>
      <img
        src="https://snowlingo-images.s3.amazonaws.com/Color+Palette+Reference.png"
        alt="color-palette"
        style={{objectFit: "cover", width: "100%", margin: '2rem 0'}}
      />
      <Typography variant="h5" component="h5" sx={{ fontWeight: "bold", color: "#211951", marginTop: '1rem', marginBottom: '0.5rem'}}>
        Developing Our Design System
      </Typography>
      <Typography variant="h6" component="p">
        Our design system was pivotal, a single source of truth that we nurtured within Figma. It held our design tokens, colors, typography, logo and choice of icons. This repository ensured consistency across our project, acting as a compass that kept our team aligned.
        <br/><br/>
        In designing our app, we embraced a theme that merges the frigid thrill of snowboarding with the cerebral zest of tech enthusiasts. Our chosen color palette echoes the icy landscapes synonymous with the sport, consisting of cool blues and grays that invoke a hacker’s sharp focus. The font, reminiscent of coding, complements this by appealing to the digital native, optimizing readability and enhancing the user interface with its clean, monospaced aesthetic. This 'cold hacker' theme resonates with young, tech-savvy snowboarders, offering them an app that feels as cutting-edge and youth-oriented as their lifestyle.
      </Typography>
      <img
        src="https://snowlingo-images.s3.amazonaws.com/Style+Guide.png"
        alt="design-system"
        style={{objectFit: "cover", width: "100%", margin: '2rem 0'}}
      />
      <Typography variant="h5" component="h5" sx={{ fontWeight: "bold", color: "#211951", marginTop: '1rem', marginBottom: '0.5rem'}}>
        Creating the Hi-Fi Prototype
      </Typography>
      <Typography variant="h6" component="p">
        Building our Hi-Fi prototype was a phase of realization. We breathed life into static images, introducing interactive elements and lifelike transitions in Figma. This prototype was a manifestation of our project’s potential, allowing us to not just envision but interact with our design in a way that simulated real-world usage. The figure below has shown our first version of Hi-Fi Prototype.
      </Typography>
      <img
        src="https://snowlingo-images.s3.amazonaws.com/Screen+Shot+2024-04-30+at+7.07.24+PM.png"
        alt="hi-fi v1"
        style={{objectFit: "cover", width: "100%", margin: '2rem 0'}}
      />
      <Typography variant="h5" component="h5" sx={{ fontWeight: "bold", color: "#211951", marginTop: '1rem', marginBottom: '0.5rem'}}>
        Heuristic Evaluation Process
      </Typography>
      <Typography variant="h6" component="p">
        The heuristic evaluation of our Hi-Fi prototype was a grounding experience. We dissected our design using established usability principles, uncovering areas where the user’s experience could be smoothed and enhanced.
        <br/><br/>
        Our heuristic evaluation highlighted key areas for improvement in our app's user interface. Users faced navigational difficulties, especially when the login page offered no feedback after action was taken. This issue, along with the disorienting menu page, underscores the need for clearer system status visibility and navigation cues.
        <br/><br/>
        Additionally, users struggled with distinguishing between interactive elements due to a lack of visual contrast, making it challenging to identify primary and secondary actions on lesson pages. This feedback points to the importance of a well-defined visual hierarchy. Addressing these issues will enhance user orientation and make interactions more intuitive, ensuring a smoother, more efficient user journey through the app.
      </Typography>
      <Typography variant="h5" component="h5" sx={{ fontWeight: "bold", color: "#211951", marginTop: '1rem', marginBottom: '0.5rem'}}>
        Improvements on Hi-Fi Prototype
      </Typography>
      <Typography variant="h6" component="p">
        Based on user feedback, we've refined our high-fidelity prototype to significantly enhance usability. Navigation has been streamlined with clear, immediate feedback implemented upon user actions, particularly during login, ensuring users are never left uncertain of the system status. We've introduced distinct visual cues and contrasts to differentiate between primary and secondary buttons, facilitating a more intuitive learning experience. The menu interface now boasts immediate content beyond the header, preventing any sense of disorientation. Form design on personal info pages has been clarified with well-labeled sections and visibly marked mandatory fields, improving efficiency and user flow. These improvements align with core usability heuristics, fostering a more engaging and frictionless interaction within the app.
      </Typography>
      <img
        src="https://snowlingo-images.s3.amazonaws.com/Screen+Shot+2024-04-30+at+7.20.49+PM.png"
        alt="hi-fi v2"
        style={{objectFit: "cover", width: "100%", margin: '2rem 0'}}
      />
    </section>
  )
}

export default Hifi;
