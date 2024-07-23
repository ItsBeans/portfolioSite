
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


 
 

export const HomePage = () => {

    const textStyle = {
        fontSize: "30px", 
      };
    
      const textStyle2 = {
        fontSize: "20px", 
      };
     
    
      const textStyle3 = {
        fontSize: "20px", 
        
      };

    return(
    <ChakraProvider theme={theme}>
      
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing='20px'>



       
       

          <Nav/>
          

          <div style={textStyle}> Hey! 👋🏻 I am Benediktas. 20 year old software engineer from London.</div>
       
          

        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>

    )

}

