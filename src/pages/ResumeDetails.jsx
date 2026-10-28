import { Box, Grid } from "@mui/material";
import { useState } from "react";
import Form from "../components/Form";
import Preview from "../components/Preview";

const ResumeDetails = () => {
  const [resumeData, setResumeData] = useState({
    fullName: "",
    location: "",
    jobTitle: "",
    email: "",
    contactNumber: "",
    linkedin: "",
    github: "",
    degree: "",
    university: "",
    yog: "",
    summary: "",
    skills: [],
  });

  return (
    <Box sx={{ m: 10 }}>
      <Grid container>
        <Grid size={{ md: 6 }}>
          <Form setResumeData={setResumeData} resumeData = {resumeData} />
        </Grid>

        <Grid size={{ md: 6 }}>
          <Preview resumeData={resumeData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResumeDetails;
