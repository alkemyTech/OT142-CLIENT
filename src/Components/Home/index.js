import React, { useCallback, useEffect, useState } from 'react';
import {
  Grid,
  GridItem,
  Image,
  Text,
  Flex,
  Center,
  Button,
  Heading
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CarouselSlides from '../Slides/HomeSlide';
import { get } from '../../Services/publicApiService';
import Spinner from '../Spinner/index';
import { showAlertErr } from '../../Services/AlertServicie/AlertServicie';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../../app/features/newsSlice';
import NewsList from '../News/NewsList';

const Home = () => {
  const [loading, setLoading] = useState();
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState();
  const [organizationData, setOrganizationdata] = useState();
  const [newsData, setNewsData] = useState();
  const [testimonialsData, setTestimonialsData] = useState();

  const dispatch = useDispatch();
  const { news } = useSelector(state => state);

  const getDataOrganization = useCallback(async () => {
    try {
      const { data } = await get('/organization');
      setOrganizationdata(data.data);
      setLoading(true);
    } catch (e) {
      setError(e);
      showAlertErr({ text: 'Upssss...!! sucedió un error' });
    }
  }, []);
  const getDataNews = useCallback(async () => {
    try {
      const { data } = await get('/news');
      setNewsData(data.data);
    } catch (e) {
      console.log(e);
      showAlertErr({ text: 'Upssss...!! sucedió un error' });
    }
  }, []);
  const getDataTestimonials = useCallback(async () => {
    try {
      const { data } = await get(process.env.REACT_APP_TESTIMONIALS);
      setTestimonialsData(data.data);
    } catch (e) {
      console.log(e);
      showAlertErr({ text: 'Upssss...!! sucedió un error' });
    }
  }, []);

  useEffect(() => {
    getDataOrganization();
    getDataNews();
    getDataTestimonials();
  }, []);

  useEffect(async () => {
    try {
      // setLoading(true);
      await dispatch(getAllNews());

      setNewsData(news.news);
    } catch (error) {
      console.log(error);
      // setError(true);
    }
    setLoading(false);
  }, [dispatch]);

  return (
    <>
      {loading
        ? (
          <Grid
            templateRows="auto"
            templateColumns="1fr"
          >
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
              <Text align={'center'} fontSize="4xl">
                {organizationData.welcome_text}
              </Text>
            </GridItem>

            <GridItem>
              <Text align={'center'} fontSize="3xl">
                Últimas novedades
              </Text>

              <Flex justify={'space-around'}>
                {news.news?.length > 0
                  ? <NewsList newsList={news.news.slice(0, 4) || []} loading={news.newsLoading} error={news.newsError}/>
                  : <Text>No hay datos que mostrar</Text>}
              </Flex>

              <Link to="/Novedades">
                <Center>
                  <Button
                    display={{ base: 'none', md: 'inline-flex' }}
                    fontSize={'sm'}
                    fontWeight={600}
                    color={'blue.300'}
                    bg={'white'}
                    variant="outline"
                    borderColor="blue.300"
                    _hover={{
                      bg: 'blue.300',
                      color: 'white'
                    }}
                  >
                    Ver todas
                  </Button>
                </Center>
              </Link>
            </GridItem>

            <GridItem>
              <Text align={'center'} fontSize="3xl">
                Testimonios
              </Text>
              <Flex justify={'space-around'} flexDir='row' ml={5} mr={5} wrap='wrap'>
                {testimonialsData?.length > 0
                  ? testimonialsData.slice(0, 6).map((testimonial) => {
                    return (
                      <>
                      <Flex flexDir='column' alignItems='center' m={2} p={3} boxShadow='0px 0px 10px 0px rgba(0,0,0,0.4)' borderRadius='5' maxW='220px'>
                          <Image
                            borderRadius="full"
                            boxSize="100px"
                            key={testimonial.id}
                            objectFit="cover"
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                          <Heading fontWeight='bold' fontSize={15} mb={5}>{testimonial.name}</Heading>
                          <Text textAlign='justify'>{`"${testimonial.description}"`}</Text>
                      </Flex>
                      </>
                    );
                  })
                  : <Text>No hay datos que mostrar</Text>}
              </Flex>
            </GridItem>

          </Grid>
          )
        : (
          <Spinner />
          )}
    </>
  );
};

export default Home;
