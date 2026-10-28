import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleResume, updateResume } from "../services/AllApis";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import Preview from "../components/Preview";
import { FaEdit } from "react-icons/fa";
import { AiOutlineBackward } from "react-icons/ai";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import jobJson from "../assets/jobRole.json";
import { toast } from "react-toastify";
import summaryJson from "../assets/summaries.json";
import skillsJson from "../assets/jobSkills.json";

const SingleResume = () => {
  const [singleResume, setSingleResume] = useState({
    fullName: "",
    location: "",
    jobTitle: "",
    email: "",
    contactNumber: 0,
    linkedin: "",
    github: "",
    degree: "",
    university: "",
    yog: 0,
    summary: "",
    skills: [],
    id: 0,
  });

  const [newSkill, setNewSkill] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { id } = useParams();

  useEffect(() => {
    let isActive = true;
    getSingleResume(id)
      .then((apiResponse) => {
        if (!isActive) {
          return;
        }
        if (apiResponse.status == 200) {
          setSingleResume(apiResponse.data);
        } else {
          toast.error("Failed to get Data");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to get Data");
      });

    return () => {
      isActive = false;
    };
  }, [id]);

  const onJobRoleChange = (role) => {
    setSingleResume({
      ...singleResume,
      jobTitle: role,
      summary: summaryJson[role],
      skills: skillsJson[role],
    });
  };

  const addNewSkill = () => {
    setSingleResume({ ...singleResume, skills: [...singleResume.skills, newSkill] });
  };

  const onUpdateClick = async()=>{
    try {
      let apiResponse = await updateResume(id,singleResume)
      if(apiResponse.status==200){
        toast.success('updated successfully')
        handleClose()
      }else{
        toast.error('updation failed')
      }
    } catch (error) {
      console.log(error)
      toast.error('updation failed')
    }
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          marginTop: 8,
        }}
      >
        
        <Button sx={{ color: "#795037" }} onClick={handleOpen}>
          {" "}
          <FaEdit style={{ fontSize: "19px", fontWeight: 400 }} />
          Edit CV
        </Button>
        <Button sx={{ color: "#795037" }}>
          {" "}
          <AiOutlineBackward
            style={{ fontSize: "19px", fontWeight: 400 }}
          />{" "}
          Home
        </Button>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: "900px",
          mx: "auto",
          my: 2,
          px: { xs: 2, sm: 4 },
          py: { xs: 3, sm: 5 },
        }}
      >
        <Preview resumeData={singleResume} />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "15%",
            left: "30%",

            width: 650,
            maxHeight: "80vh",
            overflowY: "auto",
            bgcolor: "#fff",
            border: "2px solid #333",
            boxShadow: 24,
            p: { xs: 2.5, sm: 5 },
            outline: "none",
          }}
        >
          <Typography
            sx={{
              fontSize: 20,
              backgroundColor: "#604d50",
              color: "#fff",
              paddingLeft: 1,
              py: 1.3,
              mb: 2.5,
            }}
          >
            Edit Resume Details
          </Typography>
          <Typography
            variant="h4"
            sx={{ mb: 2, fontWeight: 600, fontSize: 27 }}
          >
            Personal Details
          </Typography>

          <TextField
            onChange={(e) =>
              setSingleResume({ ...singleResume, fullName: e.target.value })
            }
            value={singleResume?.fullName}
            label="FullName"
            variant="standard"
            fullWidth
          />

          <TextField
            onChange={(e) =>
              setSingleResume({ ...singleResume, location: e.target.value })
            }
            value={singleResume?.location}
            label="Location"
            variant="standard"
            fullWidth
          />

          <TextField
            select
            label="Choose Job Title"
            value={singleResume?.jobTitle}
            onChange={(e) => onJobRoleChange(e.target.value)}
            variant="standard"
            fullWidth
            sx={{ mt: 2 }}
          >
            {jobJson?.jobRoles?.map((eachJob, index) => (
              <MenuItem key={index} value={eachJob}>
                {eachJob}
              </MenuItem>
            ))}
          </TextField>

          <Typography
            variant="h4"
            sx={{ mb: 2, fontWeight: 600, fontSize: 27, mt: 2 }}
          >
            Contact Details
          </Typography>

          <TextField
            onChange={(e) =>
              setSingleResume({ ...singleResume, email: e.target.value })
            }
            value={singleResume?.email}
            label="Email"
            variant="standard"
            fullWidth
          />

          <TextField
            onChange={(e) =>
              setSingleResume({
                ...singleResume,
                contactNumber: e.target.value,
              })
            }
            value={singleResume?.contactNumber}
            label="Contact Number"
            variant="standard"
            fullWidth
          />

          <TextField
            onChange={(e) =>
              setSingleResume({ ...singleResume, linkedin: e.target.value })
            }
            value={singleResume?.linkedin}
            label="Linkedin Link"
            variant="standard"
            fullWidth
          />

          <TextField
            onChange={(e) =>
              setSingleResume({ ...singleResume, github: e.target.value })
            }
            value={singleResume?.github}
            label="Github Link"
            variant="standard"
            fullWidth
          />

          <Typography
            variant="h4"
            sx={{ mb: 2, fontWeight: 600, fontSize: 27, mt: 2 }}
          >
            Educational Details
          </Typography>

          <TextField
            onChange={(e) =>
              setSingleResume({ ...singleResume, degree: e.target.value })
            }
            value={singleResume?.degree}
            label="Bachelor's Degree"
            variant="standard"
            fullWidth
          />

          <TextField
            onChange={(e) =>
              setSingleResume({ ...singleResume, university: e.target.value })
            }
            value={singleResume?.university}
            label="College/University Name"
            variant="standard"
            fullWidth
          />

          <TextField
            onChange={(e) =>
              setSingleResume({ ...singleResume, yog: e.target.value })
            }
            value={singleResume?.yog}
            label="Year of Graduation"
            variant="standard"
            fullWidth
          />

          <Typography
            variant="h4"
            sx={{ mb: 2, fontWeight: 600, fontSize: 27, mt: 2 }}
          >
            Skills
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            {/* <Box
        sx={{
          flex: 1,
          border: '1px solid #d8dce3',
          borderRadius: 2,
          px: 2,
          py: 1.5,
        
        }}
      >
        Add New Skill
      </Box> */}
            <TextField
              fullWidth
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder=" Add New Skill"
              variant="outlined"
              size="small"
              sx={{
                maxWidth: 600,
                "& .MuiOutlinedInput-root": {
                  height: 42,
                  border: "1px solid #d8dce3",
                  borderRadius: 2,
                  fontSize: 16,
                  marginLeft: 1,
                },
              }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end"></InputAdornment>
                  ),
                },
              }}
            />
            <Button onClick={addNewSkill} sx={{ color: "#795037", px: 1 }}>
              ADD
            </Button>
          </Stack>
          <Typography sx={{ fontWeight: 600, mb: 2 }}>
            Added Skills :
          </Typography>
          <Grid direction="row" flexWrap="wrap" sx={{ mb: 3, gap: 1.5 }}>
            {singleResume?.skills.map((eachSkill,index) => (
              <Button key={index}
                sx={{
                  bgcolor: "#b69b9b",
                  color: "#fff",
                  px: 2,
                  py: 1,
                  m: 1,
                  borderRadius: 1,
                  boxShadow: "0 2px 5px #0002",
                  fontSize: 15,
                }}
              >
                {eachSkill}
              </Button>
            ))}
          </Grid>
          <Typography
            variant="h4"
            sx={{ mb: 2, fontWeight: 600, fontSize: 27 }}
          >
            Summary
          </Typography>

          <Box>
            <TextField
              onChange={(e) =>
                setSingleResume({ ...singleResume, summary: e.target.value })
              }
              value={singleResume?.summary}
              label="Summary"
              variant="standard"
              multiline
              minRows={3}
              fullWidth
              sx={{
                mb: 4,
                "& .MuiInputBase-root": {
                  fontSize: 16,
                  lineHeight: 1.5,
                },
                "& .MuiInputLabel-root": {
                  color: "#795037",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#795037",
                },
              }}
            />
          </Box>

          <Button onClick={onUpdateClick}
            variant="contained"
            sx={{
              bgcolor: "#604d50",
              color: "#fff",

              fontSize: 17,

              px: 2,
              py: 1,
              borderRadius: 2,
              boxShadow: "none",
            }}
          >
            UPDATE CV
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default SingleResume;