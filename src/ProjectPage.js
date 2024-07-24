
import {
    Box,
    Card,
    CardBody,
    Heading,
    Text,
    CardFooter,
    Button,
    VStack,
    SimpleGrid,
    CardHeader,
    Grid,

    
  } from "@chakra-ui/react";

  import { ColorModeSwitcher } from './ColorModeSwitcher';
  import {Link} from "react-router-dom";   

export const ProjectPage = () => {

  const textStyle = {
    fontSize: "20px", 
  };

    return (

<Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
<VStack spacing='20px'>

<a >
<Button > <Link to="/">home</Link> </Button>
 </a>

<div style={textStyle}> Here are the projects that I have done or am in the process of completing.</div>

<SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
    <Card align='center' >
    <CardHeader>
      <Heading size='md'> Natural language translation</Heading>
    </CardHeader>
    <CardBody>
      <Text> Fine-tuned existing models for translation between English and Spanish.</Text>
    </CardBody>
    <CardFooter >
      <Button>View here</Button>
    </CardFooter>
  </Card>

  <Card align='center'>
    <CardHeader>
      <Heading size='md'> Grocery shopping mobile app</Heading>
    </CardHeader>
    <CardBody>
      <Text> Allows users to scan items and checkout/pay.</Text>
    </CardBody>
    <CardFooter>
      
    </CardFooter>
  </Card>
  
  <Card align='center'>
    <CardHeader>
      <Heading size='md'> Stock price prediction</Heading>
    </CardHeader>
    <CardBody>
      <Text> Time series forcasting model creating using LSTM.</Text>
    </CardBody>
    <CardFooter>
    
    </CardFooter>
  </Card>

  <Card align='center'>
    <CardHeader>
      <Heading size='md'> Sentiment Analysis on Social Media Posts</Heading>
    </CardHeader>
    <CardBody>
      <Text> Sentiment analysis of tweets, achieving 83% accuracy.</Text>
    </CardBody>
    <CardFooter>
    
    </CardFooter>
  </Card>

  <Card align='center'>
    <CardHeader>
      <Heading size='md'> Algorithmic Trading Strategy</Heading>
    </CardHeader>
    <CardBody>
      <Text> Time series forcasting model created using LSTM.</Text>
    </CardBody>
    <CardFooter>
    <Button
    isLoading
    loadingText='In progress'
    colorScheme='teal'
    variant='outline'
  >
    </Button>
    </CardFooter>
  </Card>

  <Card align='center'>
    <CardHeader>
      <Heading size='md'> Portfolio website</Heading>
    </CardHeader>
    <CardBody>
      <Text> The website you are currently on, used as a profile and to display projects.</Text>
    </CardBody>
    <CardFooter>
    
    </CardFooter>
  </Card>
</SimpleGrid>
       
       



</VStack>
</Grid>
    </Box>
       
    )
}
