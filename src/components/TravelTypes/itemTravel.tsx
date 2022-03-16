import { Box, Flex, Image, SimpleGrid, Text, useBreakpointValue, VStack } from "@chakra-ui/react";

interface itemTravelProps {
    image: string;
    label?: string
}

export function ItemTravelTypes({ image, label }: itemTravelProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });
    return (
        <Flex
            flexDirection="column"
        >
            <VStack
                w={["80%", "100%"]}
                margin="0 auto"
                spacing={1}
                mx="3%"
            >
                <Image src={`/images/${image}.svg`} w={{ base: "20px", sm: "45px", md: "60px", lg: "60px", xl: "75px" }} h="85px" />
                <Text fontSize={{ base: "18px", sm: "18px", md: "18px", lg: "18px", xl: "24px" }} fontWeight="600"  >
                    {label}
                </Text>
            </VStack>
        </Flex>
    )
}