import { Flex, HStack, useBreakpointValue } from "@chakra-ui/react";
import {ItemTravelTypes} from './itemTravel'

export function Travel(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Flex
            justifyContent="center"
            w="100%"
            my={10}
     
         >
         <HStack 
            w="80%"
            display="flex"
            wrap={"wrap"}
            justifyContent="space-between"
            gap={10}
            
         >    
            <ItemTravelTypes image="cocktail" label="vida noturna" />
            <ItemTravelTypes image="surf" label="praia"/>
            <ItemTravelTypes image="building" label="moderno"/>
            <ItemTravelTypes image="museum" label="clássico"/>
            <ItemTravelTypes image="earth" label="e mais"/>
         </HStack>
        </Flex>
    )
}