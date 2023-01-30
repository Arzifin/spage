import * as React from 'react';
//import Form from './NewForm';
import './App.css';
import Homepage from './Homepage';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './module/Header';


function App() {
  
  React.useEffect(() => {
    document.title = "9.7.2022";
  }, []);
  
  return (
    <Box id="taustafiltteri">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
