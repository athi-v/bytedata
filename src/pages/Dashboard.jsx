import { useRef } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, Button, useDisclosure, Input, Container, Box, Heading, VStack, HStack, Text, Tag, TagLabel
} from '@chakra-ui/react'

import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import Worlddata from '../components/Worlddata';

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <Container maxW="1366px" py="5px">
    
<Button ref={btnRef}  onClick={onOpen} >
    <FaBars />
  </Button>
  <Drawer
    isOpen={isOpen}
    placement='right'
    onClose={onClose}
    finalFocusRef={btnRef}
  >
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>ByteData</DrawerHeader>

      <DrawerBody>
<VStack alignItems='left' gap="5">
  <Box>
  <Link>
  <Text fontSize="xl">
  Search by Country
  </Text>
  </Link>
  </Box>

  <Box>
  <HStack>
  <Link>
  <Text fontSize="xl">
  Covid Assessor
  </Text>
  </Link>
  <Tag
      size='md'
      key='md'
      borderRadius='full'
      variant='solid'
      colorScheme='green'
    >
      <TagLabel>Coming Soon!</TagLabel>
      </Tag>

  </HStack>
  </Box>

  <Box>
  <Link>
  <Text fontSize="xl">
  About Covid-19
  </Text>
  </Link>
  </Box>
  <Box>
  <Link>
  <Text fontSize="xl">
  Contact Us
  </Text>
  </Link>
  </Box>

</VStack>


      </DrawerBody>

      <DrawerFooter>
      
        <Button width="100%" colorScheme='blue'>Sign Out</Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>

  <Box py='10px'>
    <Heading size={{base: "xl", lg: "2xl"}}>
      Dashboard
    </Heading>

  </Box>

  <Box pt='5px'>
    <Heading size={{base: "md", lg: "md"}}>
      World Data: 
    </Heading>
    
  </Box>

  <Worlddata />
    </Container>
    
  )
}

export default Dashboard