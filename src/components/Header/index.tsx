import { Flex, Image } from "@chakra-ui/react";
import { ReactNode } from "react";


export function Header(): JSX.Element {
    return (
        <Flex
            as="header"
            w="100%"
            align="center"
            h={20}
            bg="white.50"
            justify="center"
            p="auto"
        >
            <Image
                w="184px"
                h="46px"
                src="../images/Logo.svg" 
                alt="Logo" 
            />
        </Flex>
    )
}