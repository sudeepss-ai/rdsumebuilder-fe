import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FaFileDownload } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Preview = ({resumeData}) => {
  const onDownloadClick = async () => {
    try {
      const resumeElement = document.getElementById(
        String(resumeData.id || "el")
      );
      if (!resumeElement) {
        throw new Error("Resume preview element was not found");
      }

      const canvas = await html2canvas(resumeElement, { scale: 2 });
      const imageData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imageHeight = (canvas.height * pageWidth) / canvas.width;
      let heightRemaining = imageHeight;
      let position = 0;

      pdf.addImage(imageData, "PNG", 0, position, pageWidth, imageHeight);
      heightRemaining -= pageHeight;

      while (heightRemaining > 0) {
        position = heightRemaining - imageHeight;
        pdf.addPage();
        pdf.addImage(imageData, "PNG", 0, position, pageWidth, imageHeight);
        heightRemaining -= pageHeight;
      }

      const filename = `${resumeData.fullName || "resume"}`
        .replace(/[<>:"/\\|?*]+/g, "_")
        .trim();
      pdf.save(`${filename || "resume"}.pdf`);
    } catch (error) {
      console.error("Failed to download resume", error);
      toast.error("Failed to download resume");
    }
  }
  return (
    
   <Box sx={{pl:4}}>
    <Button onClick={onDownloadClick} sx={{ color: "#795037" }}>
              <FaFileDownload style={{ fontSize: "19px", fontWeight: 400 }} />{" "}
              Download CV
            </Button>
    <Paper id={resumeData.id?resumeData.id:"el"} sx={{p:2}} elevation={1}>
    
        <Typography variant='h6' sx={{fontWeight : 'bold'}}>{resumeData?.fullName}</Typography>
        <Typography sx={{my:1}}>Phone :{resumeData?.contactNumber}</Typography>
        <Typography sx={{my:1}}>Email :{resumeData?.email}</Typography>
        <Typography sx={{my:1}}>Linkedin :{resumeData?.linkedin}</Typography>
        <Typography sx={{my:1}}>Github :{resumeData?.github}</Typography>
        <Typography sx={{my:1}}>Location :{resumeData?.location}</Typography>
        <Divider/>
        <Typography variant='h6' sx={{fontWeight : 'bold' , my:1}}>Professional Summary</Typography>
        <Typography variant='p'>{resumeData?.summary}</Typography>
        <Divider sx={{mt:2}}/>
        <Typography variant='h6' sx={{fontWeight : 'bold', my:1}}>Technical Skills</Typography>
        
        {
          resumeData?.skills?.map((eachSkill,index)=>(
            <Button key={index}>{eachSkill}</Button>
          ))
        }

        <Divider/>
        <Typography variant='h6' sx={{fontWeight : 'bold'}}>Education</Typography>
        <Typography sx={{my:1}}>Bachelor's Degree in :{resumeData?.degree}</Typography>
        <Typography sx={{my:1}}>University/College Name :{resumeData?.university}</Typography>
        <Typography sx={{my:1}}>Year of Graduation :{resumeData?.yog}</Typography>

    </Paper>
   </Box>

  )
}

export default Preview