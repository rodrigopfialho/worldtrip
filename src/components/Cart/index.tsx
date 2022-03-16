import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";

interface CardItemsProps {
    name: string;
    countryName: string;
    image: string;
    countryCode?: string;
    countryImage: string;
}

export function Cart({ name, countryName, image, countryCode, countryImage }: CardItemsProps) {
    return (
        <Flex
            width="90%"
            my="2rem"
            // mx="auto"
            flexDir="column"   
        >
            
            <HStack
                wrap="wrap"
                gap="1rem"
                alignItems="flex-start"
                // mt="2rem"
            >
                <Box
                    border="1px"
                    w="256px"
                    h="279px"
                    borderColor="#bdbdaa"               
                >
                    <Image w="100%" h="173px" src={image} />
                    <Box
                        border="none"
                        m="1rem"
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        
                    >
                        <VStack>
                            <Text>
                               {name}
                            </Text>
                            <Text>
                                {countryName}
                            </Text>
                        </VStack>
                        <Image  w="30px" h="30px" borderRadius={50} src={countryImage} />
                    </Box>
                </Box>
            </HStack>
        </Flex>
    )
}