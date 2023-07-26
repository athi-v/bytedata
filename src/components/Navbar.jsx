import { Container, Box, Text, Flex, Spacer, Button} from '@chakra-ui/react'

const Navbar = () => {
  return (
<Container maxW='1366px'>
<Flex alignItems='center' py='10px'>

<Box>
    <Text fontSize='2xl' as='b'>
    ByteData
    </Text>
    </Box>
<Spacer />

    <Box >
    <Flex alignItems='center' gap='2'>
    <Box>
   </Box>
    <Spacer />
    <Box>
   <Button colorScheme="blue">Sign In</Button>

    </Box>

    </Flex>
  

    </Box>

</Flex>

   
</Container>  )
}

export default Navbar