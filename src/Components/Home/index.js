import React from "react";

import {
  Grid,
  GridItem,
  Image,
  Text,
  Flex,
  Center,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CarouselSlides from "../Slides/HomeSlide";

const placeholder = [
  "placeholder1",
  "placeholder2",
  "placeholder3",
  "placeholder4",
  "placeholder5",
  "placeholder6",
];

const Home = () => {
  return (
    <>
      <Grid
        templateRows="80px 2fr .5fr .5fr 2fr .5fr .5fr 1.5fr 1fr"
        templateColumns="1fr"
      >
        <GridItem>
          <Text align={"center"} fontSize="4xl">
            Navbar
          </Text>
        </GridItem>
        <CarouselSlides />
        <GridItem mb={6}>
          <Flex justify="center">
            <Image
              objectFit="cover"
              src={process.env.PUBLIC_URL + "/images/placeholder/470x340.png"}
              alt="placeholder"
            />
          </Flex>
        </GridItem>

        <GridItem mb="6">
          <Text align={"center"} fontSize="4xl">
            Texto de bienvenida
          </Text>
        </GridItem>

        <GridItem>
          <Text align={"center"} fontSize="3xl">
            Últimas novedades
          </Text>
        </GridItem>

        <GridItem>
          <Flex justify={"space-around"}>
            {placeholder.slice(0, 4).map((novedad, id) => {
              return (
                <Image
                  key={id}
                  objectFit="cover"
                  src={
                    process.env.PUBLIC_URL + "/images/placeholder/270x180.png"
                  }
                  alt="placeholder"
                />
              );
            })}
          </Flex>
        </GridItem>

        <GridItem>
          <Link to="#">
            <Center>
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"blue.300"}
                bg={"white"}
                variant="outline"
                borderColor="blue.300"
                _hover={{
                  bg: "blue.300",
                  color: "white",
                }}
              >
                Ver todas
              </Button>
            </Center>
          </Link>
        </GridItem>

        <GridItem>
          <Text align={"center"} fontSize="3xl">
            Testimonios
          </Text>
        </GridItem>

        <GridItem>
          <Flex justify={"space-around"}>
            {placeholder.slice(0, 4).map((novedad, id) => {
              return (
                <Image
                  key={id}
                  objectFit="cover"
                  src={
                    process.env.PUBLIC_URL + "/images/placeholder/270x180.png"
                  }
                  alt="placeholder"
                />
              );
            })}
          </Flex>
        </GridItem>

        <GridItem>
          <Text align={"center"} fontSize="4xl">
            Footer
          </Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
