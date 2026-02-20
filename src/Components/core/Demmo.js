import react from "react";
import { Flex, Spacer } from "@chakra-ui/react"
import { Badge, Box, HStack, Icon, Image, Text } from "@chakra-ui/react"
import { HiStar } from "react-icons/hi"

const Demmo = ({ image,imageAlt, title}) =>{
 
return(
   <Flex>
                  <Box maxW="sm" borderWidth="1px">
                  <Image src={image} alt={imageAlt} p="4"  />
          
                      <Box p="4" spaceY="2">
                          
                              <Text fontWeight="medium" color="fg">
                              {title}
                              </Text>
                              <HStack color="fg.muted">
                             
                          </HStack>
                      </Box>
                  </Box>
              </Flex>
)

}
export default Demmo;