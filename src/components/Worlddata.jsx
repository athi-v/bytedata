import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    VStack, 
    HStack, 
    Box, 
    Divider, useBreakpointValue
  } from '@chakra-ui/react';
  
  import { FaPrayingHands, FaHeartbeat } from "react-icons/fa";
  import { BiUserPlus, BiTestTube } from 'react-icons/bi';

import { covidGet } from '../features/covid/covidSlice';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Loader from './common/Loader';
  
  const Worlddata = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {covid, isLoading, isError, message} = useSelector((state) => state.covid)
    const isDesktop = useBreakpointValue({ base: false, lg: true });

    
    useEffect(() => {
      if(isError) {
    console.log(message)
      }
    
      dispatch(covidGet())
    
    }, [isError, message, dispatch])
    
if(isLoading) {
  return <Loader />
}
  
    return (
      <Box
        textAlign='center'
        border="1px"
        borderColor="gray.100"
        rounded="xl"
        p="15px" 
        boxShadow='md'
        mt="20px"
       
        w={{ base: "100%", md: "400px", lg: "100%" }}
        mx="auto"
      >
        {isDesktop ? (
          <HStack
            spacing="30px" 
            justify="space-around"
          >
            <Stat>
              <StatLabel style={{ display: "flex", justifyContent: "center" }}>
                <BiTestTube size={20} />
              </StatLabel>
              <StatNumber>{covid.tests?.toLocaleString()}</StatNumber>
              <StatHelpText>
                {/* <StatArrow type='increase' /> */}
                Tests Conducted
              </StatHelpText>
            </Stat>
            <Divider orientation="vertical" h="40px" borderColor="gray.200" />
                        <Stat>
              <StatLabel style={{ display: "flex", justifyContent: "center" }}>
                <BiUserPlus size={20} />
              </StatLabel>
              <StatNumber>{covid.cases?.toLocaleString()}</StatNumber>
              <StatHelpText>
                {/* <StatArrow type='decrease' /> */}
                Positive Cases
              </StatHelpText>
            </Stat>
            <Divider orientation="vertical" h="40px" borderColor="gray.200" />
            <Stat>
            
              <StatLabel style={{ display: "flex", justifyContent: "center" }}>
                <FaHeartbeat size={20} />
              </StatLabel>
              <StatNumber>{covid.recovered?.toLocaleString()}</StatNumber>
              <StatHelpText>
                {/* <StatArrow type='decrease' /> */}
                Recoveries
              </StatHelpText>
            </Stat>
            <Divider orientation="vertical" h="40px" borderColor="gray.200" />
            <Stat>
              <StatLabel style={{ display: "flex", justifyContent: "center" }}>
                <FaPrayingHands size={20} />
              </StatLabel>
              <StatNumber>{covid.deaths?.toLocaleString()}</StatNumber>
              <StatHelpText>
                {/* <StatArrow type='decrease' /> */}
                Deaths
              </StatHelpText>
            </Stat>
          </HStack>
        ) : (
          <VStack // Use VStack for mobile vertical layout
            spacing="10px" // Adjust spacing between Stat components in the vertical layout
          >
            <Stat>
              <StatLabel style={{ display: "flex", justifyContent: "center" }}>
                <BiTestTube size={20} />
              </StatLabel>
              <StatNumber>{covid.tests?.toLocaleString()}</StatNumber>
              <StatHelpText>
                {/* <StatArrow type='increase' /> */}
                Tests Conducted
              </StatHelpText>
            </Stat>
            <Divider orientation="horizontal" h="40px" borderColor="gray.200" />
                        <Stat>
              <StatLabel style={{ display: "flex", justifyContent: "center" }}>
                <BiUserPlus size={20} />
              </StatLabel>
              <StatNumber>{covid.cases?.toLocaleString()}</StatNumber>
              <StatHelpText>
                {/* <StatArrow type='decrease' /> */}
                Positive Cases
              </StatHelpText>
            </Stat>
            <Divider orientation="horizontal" h="40px" borderColor="gray.200" />
            <Stat>
              <StatLabel style={{ display: "flex", justifyContent: "center" }}>
                <FaHeartbeat size={20} />
              </StatLabel>
              <StatNumber>{covid.recovered?.toLocaleString()}</StatNumber>
              <StatHelpText>
                {/* <StatArrow type='decrease' /> */}
                Recoveries
              </StatHelpText>
            </Stat>
            <Divider orientation="horizontal" h="40px" borderColor="gray.200" />
                     <Stat>
              <StatLabel style={{ display: "flex", justifyContent: "center" }}>
                <FaPrayingHands size={20} />
              </StatLabel>
              <StatNumber>{covid.deaths?.toLocaleString()}</StatNumber>
              <StatHelpText>
                {/* <StatArrow type='decrease' /> */}
                Deaths
              </StatHelpText>
            </Stat>
          </VStack>
        )}
      </Box>
    )
  }
  
  export default Worlddata;
  