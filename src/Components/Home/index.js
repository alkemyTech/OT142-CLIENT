import React, { useCallback, useEffect, useState } from 'react';
import {
  Grid,
  GridItem,
  Image,
  Text,
  Flex,
  Center,
  Button
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CarouselSlides from '../Slides/HomeSlide';
import { get } from '../../Services/publicApiService';
import Spinner from '../Spinner/index';
import { showAlertErr } from '../../Services/AlertServicie/AlertServicie';

import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../../app/features/newsSlice';
import NewsList from '../News/NewsList';
import TestimonialSeccion from '../Testimonials';

const Home = () => {
  const [loading, setLoading] = useState();
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState();
  const [organizationData, setOrganizationdata] = useState();
  const [newsData, setNewsData] = useState([]);
  const [testimonialsData, setTestimonialsData] = useState();

  const dispatch = useDispatch();
  const { news } = useSelector(state => state);

  useEffect(() => {
    const dataNews = news.news;
    setNewsData(dataNews);
  }, [news]);

  useEffect(() => {
    if (news.newsError) {
      const errMsj = { text: 'upssss...!! sucedió un error con las novedades' };
      showAlertErr(errMsj);
    }
  }, [news.newsError]);

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
  // const getDataNews = useCallback(async () => {
  //   try {
  //     const { data } = await get('/news');
  //     console.log('dataGetDataNews', data);
  //     setNewsData(data.data);
  //   } catch (e) {
  //     console.log(e);
  //     showAlertErr({ text: 'Upssss...!! sucedió un error' });
  //   }
  // }, []);
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
    dispatch(getAllNews());
    // getDataNews();
    getDataTestimonials();
  }, []);

  // useEffect(async () => {
  //   try {
  //     // setLoading(true);
  //     await dispatch(getAllNews());
  //     console.log('newsGetAllNews', news);
  //     setNewsData(news.news);
  //   } catch (error) {
  //     console.log(error);
  //     // setError(true);
  //   }
  //   setLoading(false);
  // }, [dispatch]);

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

            <GridItem marginBottom={'20px'} >
              <Text align={'center'} fontSize="4xl">
                {organizationData.welcome_text}
              </Text>
            </GridItem>

            <GridItem marginBottom={'40px'}>
              <Text align={'center'} fontSize="3xl" marginBottom={'20px'}>
                Últimas novedades
              </Text>

              <Flex justify={'space-around'} marginBottom={'30px'}>
                {news.news?.length > 0
                  ? <NewsList newsList={newsData.slice(0, 4) || []} loading={news.newsLoading} error={news.newsError}/>
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

            <GridItem marginBottom={'40px'}>
              <Text align={'center'} fontSize="3xl" marginBottom={'20px'}>
                Testimonios
              </Text>
              <Flex direction={{ base: 'column', sm: 'column', md: 'row' }} marginBottom={'30px'} alignItems='flex-end' background={'gray.100'}>
                {testimonialsData?.length > 0
                  ? testimonialsData.slice(0, 4).map(({ id, image, name, description }) => {
                    return (

                      <TestimonialSeccion
                        key={id}
                        src={image}
                        name={name}
                        description={description}
                        />

                    );
                  })
                  : <Text>No hay datos que mostrar</Text>}
              </Flex>
              <Link to="/testimonials">
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
                    Ver todos
                  </Button>
                </Center>
              </Link>
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
