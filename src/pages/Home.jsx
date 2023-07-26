import React from 'react'
import Navbar from '../components/Navbar'
import { Container, Box, Text, Flex, Spacer, Button, Heading, VStack, Center} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Navbar />
<Container maxW="1366px">
<Center  height='xl'>

<VStack>
<Box>
      <Heading size={{base: "2xl", lg: "4xl"}} textAlign="center">
      We put science to work to build a healthier, safer world</Heading>      
      </Box>
<Spacer />
      <Box>
      <Text fontSize="xl" textAlign="center">
      ByteData leads and champions global efforts to achieve better health for all.
       </Text>      
      </Box>

      <Spacer />
      <Box>
      <Link to='/dashboard'>
      <Button colorScheme='blue'>Get Started</Button>    
      </Link>
      </Box>
  

</VStack>


</Center>
     
</Container>

    </>
  )
}

export default Home