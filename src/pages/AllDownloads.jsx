import React, { useEffect, useState } from 'react';
import { getResumes } from '../services/AllApis';
import { toast } from 'react-toastify';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ResumePreview from '../components/Preview';

const AllDownloads = () => {
  const [resumeDatas, setResumeDatas] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const apiResponse = await getResumes();
      if (apiResponse.status === 200) {
        setResumeDatas(apiResponse.data);
      } else {
        toast.error('Api call failed');
      }
    } catch (error) {
      console.log(error);
      toast.error('Api call failed');
    }
  };

  return (
    <Box>
      {resumeDatas?.length > 0 ? (
        <Box>
          <Typography variant='h3' sx={{ textAlign: 'center', p: 4 }}>
            All Downloads
          </Typography>

          <Grid sx={{ p: 5 }} spacing={5} container>
            {resumeDatas.map((eachResume, index) => (
              <Grid key={eachResume.id ?? index} size={{ xs: 12, md: 6 }}>
                <Button
                  component={Link}
                  to={`/resumes/${eachResume.id}`}
                  variant='contained'
                  sx={{ mb: 2, backgroundColor: '#795037', '&:hover': { backgroundColor: '#5d3827' } }}
                >
                  View details
                </Button>
                <ResumePreview resumeData={eachResume} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <Typography>no resumes available</Typography>
      )}
    </Box>
  );
};

export default AllDownloads;