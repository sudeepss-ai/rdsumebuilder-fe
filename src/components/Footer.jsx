import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Stack } from '@mui/material';
import { MdMailLock } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";


const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor : 'black'}}>
        <Toolbar>
         
        <Stack direction={'row'} sx={{gap : 60 , margin : '70px'}}>

           <Box  sx={{justifyContent : 'space-between'}}>
           <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Resume Builder
          </Typography>
          <Typography sx={{width : '500px' , textAlign : 'justify' , marginTop : '10px' , lineHeight : 2}}>Resume Builder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes.</Typography>
         </Box>
            
          <Stack direction={'column'} sx={{gap : 1}}>
                 <Typography variant='h5'>Contact Us</Typography>
                 <Typography> <MdMailLock /> resumebuilder@gmail.com</Typography>
                 <Typography><FaPhoneAlt /> 9087654321</Typography>
                 <Typography variant='h5'>Connect With Us</Typography>
                  
                 <Stack direction={'row'} sx={{gap : 1}}>
                  <Typography><FaInstagram /> </Typography>
                 <Typography><FaFacebook /> </Typography>
                 <Typography><FaSquareWhatsapp /></Typography>
                  </Stack> 

          </Stack>

        </Stack>

        </Toolbar>
        <Typography sx={{textAlign : 'center' , marginBottom : '80px'}}>Designed & built with ❤️ using React</Typography> 
      </AppBar>
    </Box>
  )
}

export default Footer