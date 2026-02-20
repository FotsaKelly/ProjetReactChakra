import {  Center, Heading, Text } from '@chakra-ui/react'
import { Flex, Spacer } from "@chakra-ui/react"
import { Badge, Box, HStack, Icon, Image} from "@chakra-ui/react"
import { HiStar } from "react-icons/hi"
import React from 'react'
import { AbsoluteCenter } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"

import Demmo from '../Components/core/Demmo'


const Demo = () => {
  return (
    <Button rounded="3xl" size={{ base: "md", md: "lg" }}>
      Button
    </Button>
  )
}




const Home = () => {

  

  return (
    <Box alignItems={'center'}>
    <Heading textAlign={'center'} mt={30}>
        Mon site Web
       </Heading>

        <Demmo 
        image ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKFXnQPm3COQ9nPZiMmbhvfo-sAHvBozV_A&s'
        imageAlt ='Rear view of modern home with pool'
        title ='Modern home in city center in the heart of historic Los Angeles' />
          <Center mt={900}>
        <Button rounded="3xl" size="lg" colorPalette="blue">
          Cliquez ici
        </Button>
      </Center>
       
      </Box>
       )
       
       
  
}

export default Home