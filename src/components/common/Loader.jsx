import { Dna } from  'react-loader-spinner'
import {Box, Text, Center, VStack, Container} from '@chakra-ui/react'

const Loader = () => {
  return (
<Container >
<Box>
    <Center height='xl'>
    <VStack>
      <Box>
      <Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>      </Box>

      <Box pt='10px'>
      <Text >Please wait..</Text>  

      </Box>
    </VStack>
   

    </Center>
 

    </Box>
</Container>
  
)
}

export default Loader