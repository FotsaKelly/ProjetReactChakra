import { Center, Heading, SimpleGrid, Box, Button, createSystem, defaultConfig, Card, Text  } from '@chakra-ui/react'
import React, { useState } from 'react'
import Demmo from '../Components/core/Demmo'

import { list } from '../Components/core/data'
import Inc from '../Components/core/Inc.js'
import Formulairee from '../Components/core/Formulairee.js'
import HomeProduit from './HomeProduit.js'




const Home = () => {
  

  return (
    
    <Box 
      minH="100vh" 
      bgGradient="to-br" 
      gradientFrom="blue.50" 
      gradientTo="purple.50"
      py={10} 
      px={4}
    >
      
      
      <Box 
        maxW="container.xl" 
        mx="auto" 
        bg="whiteAlpha.800" 
       
        borderRadius="3xl"   
        p={{ base: 6, md: 10 }}
        minH="3xl"
      
        borderWidth="1px"
       
      >
        
        <Heading textAlign="center" mb={10} size="2xl" >
          Mon site Web
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {list.map((item) => (
            <Demmo 
              key={item}
              image={item.imageUrl}
              imageAlt={item.imageAlt}
              title={item.title}
            />
          ))}
        </SimpleGrid>

        <Center mt={12}>
          <Button rounded="full" size="xl" colorPalette="blue" shadow="md">
            Cliquez ici
          </Button>
        </Center>

      </Box>
      <Inc/>
      <Formulairee/>
      <HomeProduit/>
    </Box>
  )
}

export default Home