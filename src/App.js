import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
 
  VStack,
  Code,
  Grid,
  theme,
  HStack,
  Button,
  Spacer,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Nav from './Navbar';
import Projects from './Projects';
import { ProjectPage } from './ProjectPage';
import { HomePage } from './HomePage';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';





function App() {


  const textStyle = {
    fontSize: "30px", 
  };

  const textStyle2 = {
    fontSize: "20px", 
  };
 

  const textStyle3 = {
    fontSize: "20px", 
    
  };
 


  return (
    <ChakraProvider theme={theme}>
    <Router>
      <Routes>
      <Route
                        exact
                        path="/"
                        element={<HomePage/>}
                    />
       <Route
                        exact
                        path="/projects"
                        element={<ProjectPage/>}
                    />
      </Routes>


    </Router>

   
    
    </ChakraProvider>
  );
}

export default App;
