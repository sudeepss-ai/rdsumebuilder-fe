import React from "react";
import homeOne from "../assets/landing.png";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import homeTwo from "../assets/resume.png";
import homeThree from '../assets/team.png'
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          backgroundImage: `url(${homeOne})`,
          backgroundSize: "cover",
          backgroundPosition: "center 15%",
          backgroundAttachment: "fixed",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.15)",
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 1,

            width: "50%",

            padding: "40px 40px",
            textAlign: "center",

            backgroundColor: "rgba(58, 63, 58, 0.65)",

            borderRadius: "7px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "white",

              fontWeight: "bold",

              fontSize: "40px",
              lineHeight: 1.25,

              mb: 4,
            }}
          >
            Designed To Get Hired. Your
            <br />
            Skills, Your Story, Your Next Job
            <br />– All In One.
          </Typography>

          <Button
            variant="contained"
            component = {Link}
            to = "/resume"
            sx={{
              backgroundColor: "#9a6749",

              color: "white",

              fontSize: "17px",

              fontWeight: "bold",

              textTransform: "none",

              padding: "10px 18px",

              borderRadius: "6px",
            }}
          >
            Make your Resume with AI
          </Button>
        </Box>
      </Box>

      <Stack>
        <Box
          sx={{ backgroundColor: "white", textAlign: "center", margin: "60px" }}
        >
          <Typography sx={{fontFamily : "Georgia, serif"}} variant="h4">What's Resume Builder</Typography>
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: "40px",
            }}
          >
            <Typography variant="h6" sx={{ textAlign: "justify", width: "600px" }}>
              Resume Builder is a web application that helps users create
              professional resumes quickly and efficiently using artificial
              intelligence. Traditional resume creation can be time-consuming
              and difficult, especially for freshers who may not know the
              correct format or keywords required for modern recruitment
              systems. <br />
              <br />
              The system can suggest job-specific keywords, professional
              summaries, and skill recommendations to make the resume more
              effective and ATS (Applicant Tracking System) friendly. <br />
              <br />
              The main goal of the Resume Builder is to simplify the resume
              creation process and help job seekers build professional,
              well-structured resumes in a few minutes. Users can edit content,
              preview their resume, and download it in formats such as PDF.
              <br />
              <br />
              This type of system is especially useful for students & fresh
              graduates, who want to create high-quality resumes that increase
              their chances of getting shortlisted for job interviews.
            </Typography>
            <img style={{ width: "350px" }} src={homeTwo} alt="Home image" />
          </Stack>
        </Box>
      </Stack>

    <Box sx={{
    height: "100vh",
    backgroundImage: `url(${homeThree})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}>

    </Box>


 <Typography variant="h3"
        sx={{
          fontFamily: "Georgia, serif",
         
          textAlign: "center",
          marginTop : '50px'
        }}
      >
        Testimony
      </Typography>
<Box
  sx={{
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
   
  }}
>
  
  <Box
    sx={{
      width: "100%",
      maxWidth: "1200px",
      margin: "auto",
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        md: "1fr 1.3fr",
      },
      gap: { xs: 5, md: 10 },
      alignItems: "center",
    }}
  >

    <Box>
      <Typography variant="h6"
        sx={{
          fontFamily: "Georgia, serif",
          fontWeight: "bold",
          mb: 5,mt:-15
        }}
      >
        Trusted by professionals worldwide.
      </Typography>

      <Typography
        sx={{
          fontFamily: "Georgia, serif",
          fontSize: "17px",
          lineHeight: 1.8,
        
          mb: 3,
        }}
      >
        At AI Builder, we don't just help you create resumes — we
        help you land the job. Whether you're a seasoned
        professional or just starting out, our tools are designed
        to get results.
      </Typography>

      <Typography
        sx={{
          fontFamily: "Georgia, serif",
          fontSize: "17px",
          lineHeight: 1.8,
          
          mb: 3,
        }}
      >
        In fact, users who used AI Builder reported getting hired
        an average of 48 days faster.
      </Typography>

      <Typography
        sx={{
          fontFamily: "Georgia, serif",
          fontSize: "17px",
          lineHeight: 1.8,
        }}
      >
        Join thousands of job-seekers who've fast-tracked their
        careers with a resume that truly stands out.
      </Typography>
    </Box>


  <Grid size={{ xs: 12, lg: 5 }}>
              <Grid container>
                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://tse3.mm.bing.net/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=Api&P=0&h=180"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://tse3.mm.bing.net/th/id/OIP.wPWx97qT9JbAIeh4t6TDVQHaHa?pid=Api&P=0&h=180"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://img.freepik.com/premium-photo/design-professional-profile-picture-with-sharp-focus-natural-lighting-clean-neutral-background_880763-20280.jpg?w=1060"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>

                <Grid size={3}>
                  <Box
                    component="img"
                    src="https://tse2.mm.bing.net/th/id/OIP.4oYqJqInuQd2TAlPPdggLgHaHa?pid=Api&P=0&h=180"
                    alt="user"
                    sx={{ width: "100%", p: 1 }}
                  />
                </Grid>
              </Grid>
            </Grid>
  </Box>
</Box>
    
     
    </>
  );
};

export default Home;
