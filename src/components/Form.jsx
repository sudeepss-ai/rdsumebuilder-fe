import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import jobJson from "../assets/jobRole.json";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import summaryJson from "../assets/summaries.json";
import skillsJson from "../assets/jobSkills.json";
import { toast } from "react-toastify";
import { addResume } from "../services/AllApis";
import { useNavigate } from "react-router-dom";

const Form = ({ setResumeData, resumeData }) => {
  const navigate = useNavigate();

  const steps = [
    "Basic Informations",
    "Contact Details",
    "Educational Details",
    "Review & Submit",
  ];
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onJobRoleChange = (role) => {
    setResumeData({
      ...resumeData,
      jobTitle: role,
      summary: summaryJson[role],
      skills: skillsJson[role],
    });
  };

  const onFinishButtonClick = async () => {
    try {
      if (
        !resumeData.fullName ||
        !resumeData.location ||
        !resumeData.jobTitle ||
        !resumeData.email ||
        !resumeData.contactNumber ||
        !resumeData.linkedin ||
        !resumeData.github ||
        !resumeData.degree ||
        !resumeData.university ||
        !resumeData.yog ||
        !resumeData.summary ||
        resumeData.skills.length === 0
      ) {
        toast.error("Please Fill The Form");
        return;
      }

      const apiResponse = await addResume(resumeData);
      console.log(apiResponse);
      if (apiResponse.status == 201) {
        toast.success("Successfully added Resume");
        navigate(`/resumes/${apiResponse.data.id}`);
      } else {
        toast.error("Something went wrong while adding Resume");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while adding Resume");
    }
  };

  const renderStepper = () => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <Typography variant="h5">Personal Details</Typography>
            <TextField
              sx={{ width: "100%" }}
              id="fullName"
              label="Full Name"
              variant="standard"
              value={resumeData.fullName}
              onChange={(e) =>
                setResumeData({ ...resumeData, fullName: e.target.value })
              }
            />
            <TextField
              sx={{ width: "100%" }}
              id="location"
              label="Location"
              variant="standard"
              value={resumeData.location}
              onChange={(e) =>
                setResumeData({ ...resumeData, location: e.target.value })
              }
            />

            <FormControl sx={{ mt: 3 }} fullWidth>
              <InputLabel id="demo-simple-select-label">
                Choose Job Title
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={' '}
                label="Choose Job Title"
                onChange={(e) => onJobRoleChange(e.target.value)}
              >
                {jobJson?.jobRoles?.map((eachJob, index) => (
                  <MenuItem key={index} value={eachJob}>
                    {eachJob}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </>
        );
      case 1:
        return (
          <>
            <Typography variant="h5">Contact Details</Typography>
            <TextField
              sx={{ width: "100%" }}
              id="email"
              label="Email"
              variant="standard"
              value={resumeData.email}
              onChange={(e) =>
                setResumeData({ ...resumeData, email: e.target.value })
              }
            />
            <TextField
              sx={{ width: "100%" }}
              id="contactNumber"
              label="Contact Number"
              variant="standard"
              value={resumeData.contactNumber}
              onChange={(e) =>
                setResumeData({ ...resumeData, contactNumber: e.target.value })
              }
            />
            <TextField
              sx={{ width: "100%" }}
              id="linkedinLink"
              label="Linkedin Link"
              variant="standard"
              value={resumeData.linkedin}
              onChange={(e) =>
                setResumeData({ ...resumeData, linkedin: e.target.value })
              }
            />
            <TextField
              sx={{ width: "100%" }}
              id="githubLink"
              label="Github Link"
              variant="standard"
              value={resumeData.github}
              onChange={(e) =>
                setResumeData({ ...resumeData, github: e.target.value })
              }
            />
          </>
        );
      case 2:
        return (
          <>
            <Typography variant="h5">Educational Details</Typography>
            <TextField
              sx={{ width: "100%" }}
              id="bachelorsDegree"
              label="Bachelor's Degree"
              variant="standard"
              value={resumeData.degree}
              onChange={(e) =>
                setResumeData({ ...resumeData, degree: e.target.value })
              }
            />
            <TextField
              sx={{ width: "100%" }}
              id="collegeUniversityName"
              label="College/University Name"
              variant="standard"
              value={resumeData.university}
              onChange={(e) =>
                setResumeData({ ...resumeData, university: e.target.value })
              }
            />
            <TextField
              sx={{ width: "100%" }}
              id="yearOfGraduation"
              label="Year of Graduation"
              variant="standard"
              value={resumeData.yog}
              onChange={(e) =>
                setResumeData({ ...resumeData, yog: e.target.value })
              }
            />
          </>
        );
      case 3:
        return (
          <>
            <Typography variant="p">
              Our AI will generate Skills & Summary according to your job
              role.Once the form get submitted, user won't get the chance to
              update the resume details. If you want ot proceed please click the{" "}
              <b>Generate AI Skill & Summary</b> button to submit.
            </Typography>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {renderStepper()}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            {activeStep === steps.length - 1 ? (
              <Button onClick={onFinishButtonClick}>Finish</Button>
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default Form;
