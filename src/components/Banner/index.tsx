import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

    return (
       <Box
       
        width="100%"
        maxWidth="1440px"
        
        bgImage="url(./images/Background.svg)"
        h="280px"
       >

          <Flex
          display="flex"
            // flexDir="row"
            justifyContent="space-around"
            // w="100%"
            h="325px"
            alignItems="center"
            mx="1.5rem"
            
          >
          <Flex
            flexDirection="column"
            // width="426px"
            h={108}
            marginBottom="80px"
            
          >
          <Text
            as="h1"
            fontWeight="500"
            fontSize={["xl", "3xl", "3xl", "4xl", "4xl"]}
            lineHeight="54px"
            color="white.50"
           >
            5 Continentes<br />
            infinitas possibilidades.
           </Text>
           
           <Text
            fontSize="md"
            fontWeight="400"
            lineHeight="30px"
            color="white.100"
           >
            Chegou a hora de txxirar do papel a viagem que você<br/> sempre sonhou. 
           </Text>
          </Flex>

          <Image 
            marginTop={6}
            w={["300px","250px","350px","417px"]}
            display={['none','none','block']}
            h="270px"
            src="./images/Airplane.svg"/>
          </Flex>
       </Box> 
    )
}