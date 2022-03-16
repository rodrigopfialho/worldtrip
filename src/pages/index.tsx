import { Divider, Flex, Text } from "@chakra-ui/react";
import  Head  from "next/head";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import Slide from "../components/swiper/Slide";

import { Travel } from "../components/TravelTypes";
import{ api }from "../service/api"
export default function Home() {
  const dado = api
  console.log(dado)
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>

      <Flex
        margin="auto"
        w="100%"
        maxWidth={1440} 
        h="100%"
        flexDirection="column"
      >
        <Header />
        <Banner />
        <Travel />
        <Divider
                variant="solid"
                margin="auto"
                w="90px"
                border="2px"
                borderColor="dark.900"
                my="rem"
                color="blue.900"
            />   
            <Text
                marginBottom="17px"
                fontWeight="600"
                fontSize={["20px", "20px", "24px", "26px", "28px"]}
                textAlign="center"
                color="dark.900"
                my="2rem"
            >
                Vamos nessa? <br />
                Então escolha seu continente
            </Text>
        <Slide />
      </Flex>
    </>
  )
}
