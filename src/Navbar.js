import {
    Flex,
    Button,
    Spacer,
    Box,
    Heading,
    ButtonGroup,
    useColorModeValue,
    Stack,
   
  } from "@chakra-ui/react";  

  import {Link} from "react-router-dom";
  
  
    

  export default function Nav() {    
  
    return (
        <Flex minWidth='max-content' alignItems='top' gap='2'>
        <Box p='2'>
          <Heading size='md'>benediktas.dev</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>

        <a href="https://www.linkedin.com/in/benediktas-rocys-283647291/">
          <Button > LinkedIn </Button>
          </a>

        <a href="https://github.com/ItsBeans">
          <Button > Github </Button>
          </a>
          <a href="mailto:bennyrocys@gmail.com">
          <Button > Email </Button>
          </a>

          <a >
          <Button > <Link to="/projects">Projects</Link> </Button>
          </a>
        </ButtonGroup>
      </Flex>
    )
  }
