import { Typography } from "@mui/material";

function Usability () {
  return (
    <section className="my-10">
      <Typography variant="h4" component="h4" sx={{ fontWeight: "bold", color: "#211951", marginBottom: "1rem"}}>
        Controlled Usability Study
      </Typography>
      <Typography variant="h6" component="p">
        In our controlled usability study, we focused on the design question of whether to allow free-form input for personal information or to provide structured selections. We crafted two interface variants: one with open fields for height, weight, and region, and another offering unit selection for height and weight with a dropdown for regions.
      </Typography>
      <div className="flex w-full gap-10 justify-center">
        <img
          src="https://snowlingo-images.s3.amazonaws.com/Picture1.png"
          alt="study v1"
          style={{objectFit: "cover", width: "30%", margin: '2rem 0'}}
        />
        <img
          src="https://snowlingo-images.s3.amazonaws.com/Picture2.png"
          alt="study v2"
          style={{objectFit: "cover", width: "30%", margin: '2rem 0'}}
        />
      </div>
      <Typography variant="h6" component="p">
        Our study plan involved participants registering on both interface versions, measuring clarity, task difficulty, and satisfaction through questionnaires. Objective data such as completion time, input accuracy, click count, and mouse distance were tracked via custom code.
        <br/><br/>
        Initial data suggested the structured variant (v2) enhanced input accuracy and user satisfaction. However, t-test results indicated no significant difference in clicks, time, and mouse distance, but a notable difference in accuracy. This informed our decision to pursue the dropdown and selection model, as users preferred its clarity and ease.
        <br/><br/>
        Additionally, we gleaned qualitative insights: users requested clearer differentiation between feet/inches and expressed concerns about data privacy. To address these, we plan to separate height inputs, clarify location fields, allow form submission via the Enter key, shorten age input, and provide reasons for data collection. This will cater to user preferences and enhance comfort with information sharing. The study underscored the necessity for clear communication and user empowerment within the interface, driving our commitment to continual refinement.
        <br/><br/>
        Base on the controlled usability study, we have further improved the Hi-Fi Prototype design as below:
      </Typography>
      <img
        src="https://snowlingo-images.s3.amazonaws.com/Screen+Shot+2024-04-30+at+11.06.04+PM.png"
        alt="study v2"
        style={{objectFit: "cover", width: "100%", margin: '2rem 0'}}
      />
    </section>
  );
}

export default Usability;
