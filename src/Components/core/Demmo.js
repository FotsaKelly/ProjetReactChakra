import react from "react";
import { Flex, Spacer } from "@chakra-ui/react"
import { Badge, Box, HStack, Icon, Image, Text, createSystem, defaultConfig } from "@chakra-ui/react"
import { HiStar } from "react-icons/hi"

export const system = createSystem(defaultConfig, {
    theme: {
        semanticTokens: {
            shadows: {
                custom: {
                    value: {
                        _light: "0 32px 56px 0 rgba(0, 0, 0, 0.25)",
                        _dark: "0 32px 56px 0 rgba(0, 0, 0, 0.25)",
                    },
                },
            },
        },
    },
});
const Demmo = (props) => {

    
 
return(
   <Flex>
        <Box maxW="sm" borderWidth="1px" shadow="custom" borderRadius="lg" overflow="hidden">
        <Image src={props.image} alt={props.imageAlt} p="4" width="100%"   />

            <Box p="4" spaceY="2">
                
            <Text fontWeight="medium" color="fg">
            {props.title}
            </Text>

            <HStack color="fg.muted">
                hhhh
            </HStack>
            </Box>
        </Box>
    </Flex>
)

}
export default Demmo;