import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ResumeGenerate = () => {
  return (
    <Box sx={{p : 10}}>
        <Typography variant='h4' sx={{textAlign : 'center'}}>Create an ATS Friendly Resume in Minutes with AI</Typography>

      <Grid container sx={{marginLeft : '170px', marginTop : '60px'}}>

          <Grid size = {6}>
             <Box sx={{textAlign : 'center' , border : 1 , width : '400px', p :5, borderRadius : '8px' , boxShadow : 2}}>
              <Typography sx={{color : 'blue' , fontSize:'30px'}}><IoDocumentTextSharp  /></Typography>
              <Typography variant='h6' sx={{fontWeight : 'bold'}}>Add Your Details</Typography>
              <Typography>Our AI will generate Skills & Summary</Typography>
              <Typography variant='h6'>Step 1</Typography>
             </Box>
          </Grid>

          <Grid size = {6}>
            <Box sx={{textAlign : 'center' , border : 1 , width : '400px', p :5, borderRadius : '8px' , boxShadow : 2}}>
              <Typography sx={{color : 'red' , fontSize:'30px'}} >< FaFileDownload  /></Typography>
              <Typography variant='h6' sx={{fontWeight : 'bold'}}>Download Your Resume</Typography>
              <Typography>Download CV as PDF and start applying</Typography>
              <Typography variant='h6'>Step 2</Typography>
            </Box>
          </Grid>

      </Grid>

      <Button variant='contained' component = {Link} to ='/resume-details' sx={{backgroundColor : "#db814c" , color : 'white' , marginLeft : '600px', marginTop: '80px'}}>LET'S STARt</Button>

    </Box>
  )
}

export default ResumeGenerate