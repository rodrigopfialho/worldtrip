import { Box, Flex, HStack, Icon, Image, SimpleGrid, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi"
import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { api } from "../../service/api";

type ContinentType = {
    id: number;
    name: string;
    description: string;
    bannerImage: string;
    numberOfCountries: number;
    numberOfLanguages: number;
    amountMostPopularCities: number;
    mostPopularCities: [{
      cityName: string;
      countryName: string;
      cityImage: string;
      countryCode: string;
      countryImage: string;
    }]
  }
  
  interface ContinentProps {
    continent: ContinentType;
  }

export default function Continent({continent}:ContinentProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        sm: true
    });

    return (
        <Flex
            flexDir="column"
            width="100%"
            position="relative"
        >
            <HStack
                w="80%"
                h="100px"
                mx="auto"
                justifyContent="space-between"
                flexDir="row"
                align="center"
            >
                <Link href="/" >
                    <Icon
                        cursor="pointer"
                        w="32px"
                        h="32px"
                        as={FiChevronLeft} />
                </Link>
                <Header />
            </HStack>

            <Box
                w="100%"
                h="500px"
                backgroundImage={`url(${continent.bannerImage})`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                bgSize="cover"
            >
                <Text
                    mt="23rem"
                    mx="6rem"
                    fontSize="48px"
                    fontWeight="600"
                    color="white.50"
                >
                    {continent.name}
                </Text>
            </Box>

            <Flex
                w="90%"
                px="1rem"
                // flexDir={isWideVersion ? "row" : "column"}
                justifyContent="space-between"
                alignItems="center"
                mx="auto"
                wrap="wrap"
            >
                <HStack
                    mt="3rem"
                >
                    <Text
                        align="justify"
                        w={["100%", "85%", "700px", "600px"]}
                        fontSize={["16px", "18px", "22px", "24px"]}
                    >
                        {continent.description}
                    </Text>
                </HStack>
                <HStack
                    textAlign="center"
                    spacing="2rem"
                    wrap="wrap"
                >
                    <Box>
                        <Text
                            fontSize="40px"
                            color="yellow.500"
                            fontWeight="600"
                        >{continent.numberOfCountries}</Text>
                        <Text
                            fontWeight="600"
                            fontSize="20px"
                        >países</Text>
                    </Box>
                    <Box>
                        <Text
                            fontSize="40px"
                            color="yellow.500"
                            fontWeight="600"
                        >{continent.numberOfLanguages}</Text>
                        <Text
                            fontWeight="600"
                            fontSize="20px"
                        >línguas</Text>
                    </Box>
                    <Box>
                        <Text
                            fontSize="40px"
                            color="yellow.500"
                            fontWeight="600"
                        >{continent.amountMostPopularCities}</Text>
                        <Text
                            fontWeight="600"
                            fontSize="20px"
                        >
                            cidades +100</Text>
                    </Box>
                </HStack>
            </Flex>
            
            <Flex
                flexDirection="column"
                // width="100%"
                mx="5rem"
            >
                <Text
                    display="block"
                    marginTop="3rem"
                    fontWeight="500"
                    fontSize="36px"
                    color="#47585B"
                >
                    Cidades +100
                </Text>    
                <SimpleGrid
                columns={[2, null, 4]}
                minChildWidth='200px'
                spacing={-10}
                flexWrap="wrap"    
                >
                    {continent.mostPopularCities.map((city) => (
                        <Cart
                            key={city.cityName}
                            name={city.cityName}
                            image={city.cityImage}
                            countryName={city.countryName}
                            countryCode={city.countryCode}
                            countryImage={city.countryImage}
                        />
                ))}
               
            </SimpleGrid>
          </Flex>
        </Flex>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [],
      fallback: 'blocking'
    }
  }
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { continent } = params
  
    const response = await api.get(`/continents?slug=${continent}`)
    
    const continentInfos: ContinentType = response.data[0]
  
    return {
      props: {
        continent: continentInfos
      }
    }
  }