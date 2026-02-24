import { Box, Button, Card, HStack, Stack, Text } from "@chakra-ui/react"
import React, { useState } from "react"

const Inc =()=>{
    const [count, setCount] = useState(0)
    const [person, setPerson]= useState({
      name :'kelly',
      prenom : 'AMD',
      age : 23
    })
    const incPerson = () =>{
      setPerson ({...person, age: person.age +1})
    }
  const inct = ()=>{
      setCount(count + 1)
  }
  const dec =()=>{
    setCount( count >0 ? count-1 : 0)
  }

  return(
    <Card.Root width="600px" mx="auto" mt={5} shadow="md">
      <Card.Body  >
      
         <HStack gap={4} columns={{base:1}}> 
          <Stack direction={{ base:"column-reverse", md:"row" }} width={{ base:"400px", md:"600px"}} alignItems={{ base : "center"}} gap={4}>
            <Box  borderRadius="2xl" borderWidth="1px" textAlign="center" p={4} >
          <Text> Le compteur : {count}</Text>
        <Box rown={2} >
          <Button gap={4} m={4} onClick={inct}>Add</Button>
          <Button onClick={dec} gap={4} m={9}>Reduct</Button>
        </Box>
        </Box>
        <Box borderRadius="2xl"  borderWidth="1px" textAlign="center">
          <Text mb={5} p={4}>My name is {person.name}, I have : {person.age}</Text>
          <Button onClick={incPerson} size="sm" mb={4}>Aug</Button>
        </Box>
          </Stack>
        </HStack>
      
      </Card.Body>
      
    </Card.Root>
    
    
  )
}
export default Inc ;