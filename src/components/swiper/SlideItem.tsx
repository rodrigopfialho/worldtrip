import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

interface slideItemProps {
  name: string;
  description: string;
  link: string;
  imageUrl: string;
}

export function SlideItem({ name, description, link, imageUrl }: slideItemProps) {
  return (
    <Flex
      flexDir="column"
      my="1rem"
      w="100%"
      h="100%"
      justifyContent="center"
    >
      <Link href={`/continents/${link}`}>
        <a>
          <Flex
            // w="100%"
            h="65vh"
            align="center"
            justify="center"
            direction="column"
            bgImage={`url(${imageUrl})`}
            bgPosition='center'
            bgRepeat='no-repeat'
            bgSize='cover'
            textAlign='center'
          >
            <Heading
              fontSize={["2xl", "5xl"]}
              color="gray.50"
              fontWeight="700"
            >
              {name}
            </Heading>
            <Text
              fontWeight="bold"
              color="gray.100"
              fontSize={["sm", "2xl"]}
              mt={["12px", "4"]}
            >
              {description}
            </Text>
          </Flex>
        </a>
      </Link>
    </Flex>
  )
}