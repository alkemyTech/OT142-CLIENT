import React, { useCallback, useEffect, useState } from "react";

import {
  Grid,
  GridItem,
  Image,
  Text,
  Flex,
  Center,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CarouselSlides from "../Slides/HomeSlide";
import { get } from "../../Services/publicApiService";


const Home = () => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [organizationData, setOrganizationdata] = useState();
  const [newsData, setNewsData] = useState();
  const [testimonialsData, setTestimonialsData] = useState();
  console.log(organizationData, newsData, testimonialsData);

  const getDataOrganization = useCallback(async () => {
    try {
      const { data } = await get("/organization");
      setOrganizationdata(data.data);
      setLoading(true);
    } catch (e) {
      setError(e);
    }
  }, []);
  const getDataNews = useCallback(async () => {
    try {
      const { data } = await get("/news");
      setNewsData(data.data);
    } catch (e) {
      console.log(e);
    }
  }, []);
  const getDataTestimonials = useCallback(async () => {
    try {
      const { data } = await get("/testimonials");
      setTestimonialsData(data.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getDataOrganization();
    getDataNews();
    getDataTestimonials();
  }, []);

  return (
    <>
      {loading ? (
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
                src={organizationData.logo}
                alt="placeholder"
              />
            </Flex>
          </GridItem>

          <GridItem mb="6">
            <Text align={"center"} fontSize="4xl">
              {organizationData.welcome_text}
            </Text>
          </GridItem>

          <GridItem>
            <Text align={"center"} fontSize="3xl">
              Últimas novedades
            </Text>
          
            <Flex justify={"space-around"}>
              {newsData?.length > 0 &&
                newsData.slice(0, 6).map((novedad) => {
                  console.log(novedad);
                  return (
                    <Image
                      maxWidth="150px"
                      key={novedad.id}
                      objectFit="cover"
                      src={novedad.image}
                      alt={novedad.name}
                    />
                  );
                })}
            </Flex>
          
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
            <Flex justify={"space-around"}>
              {testimonialsData?.length > 0 &&
                testimonialsData.slice(0, 6).map((testimonial) => {
                  console.log(testimonial);
                  return (                
                      <Image
                        borderRadius="full"
                        boxSize="150px"
                        key={testimonial.id}
                        objectFit="cover"
                        src={testimonial.image}
                        alt={testimonial.name}
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
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Home;
