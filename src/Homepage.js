import * as React from 'react';
import Builder from './module/Builder';
import { Box } from '@mui/material';
//import AlteredImageCard from './module/AlteredImageCard';
//import Form from './Form';
import { useNavigate, Link, Navigate as Redirect } from 'react-router-dom';
import Header from './module/Header';
import './Homepage.css';

function Homepage() {
  return (

    <Box 
      //id="tausta"
      sx={{
        width: '100%'
      }}
    >
      <Builder />
    </Box>
  );
}

export default Homepage;
