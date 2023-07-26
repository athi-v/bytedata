import { Container, Box, Text, Flex, Spacer, Button, Heading, VStack, Center} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
<Container maxW="1366px">
<Center  height='xl'>

<VStack>
<Box>
<Box>
      <Text fontSize="xl" textAlign="center">
      Uh Oh, Page not found🙁       </Text>      
      </Box>
      <Spacer />

      <Heading size={{base: "2xl", lg: "4xl"}} textAlign="center">
      404</Heading>      
      </Box>

      <Spacer />
      <Box>
      <Link to='/'>
      <Button colorScheme='blue'>Return home</Button>    
      </Link>
      </Box>
  

</VStack>


</Center>
     
</Container>
  )
}

export default Error