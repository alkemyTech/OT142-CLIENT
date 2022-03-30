import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Skeleton, Heading, Center, Text } from '@chakra-ui/react';
import { getNews } from '../../../Services/newsService';
import Spinner from '../../Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentReducer } from '../../../app/features/comments';

const NewsDetail = ({ tittle, news }) => {
  const targetRef = useRef(null);
  const [newsDetail, setNewsDetail] = useState({});
  const [newsDetailCommentsReducer, setNewsDetailCommentsReducer] = useState(
    []
  );
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state);
  const { id } = useParams();

  useEffect(() => {
    const dataComments = comments.comments;
    setNewsDetailCommentsReducer(dataComments);
    console.log('esta es la data', dataComments);
  }, [comments]);

  useEffect(() => {
    let callFetchApi = 0;
    getNews(id).then((newsDetailDataAPI) => {
      console.log('newsDetailDataAPI', newsDetailDataAPI);
      const dataApi = newsDetailDataAPI.data;
      console.log('dataApi', dataApi);
      setNewsDetail(dataApi);
    });

    const showComments = () => {
      callFetchApi++;
      if (callFetchApi === 2) {
        dispatch(getCommentReducer());
        setLoading(false);
      }
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1
    };

    const observer = new IntersectionObserver(showComments, options);
    const currentTarget = targetRef.current;

    observer.observe(currentTarget);
  }, [dispatch]);

  return (
    <>
      <Box
        m='5'
        maxW='lg'
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
      >
        <Center mb='3' ml='2' mr='2'>
          <Heading>{newsDetail.name}</Heading>
        </Center>
        <img src={newsDetail.image} alt='News img' />
        <Text fontSize='md' p='2'>
          {newsDetail.content} Lorem ipsum dolor sit amet consectetur adipiscing
          elit, pulvinar litora placerat ornare cubilia maecenas massa, lacinia
          fermentum nullam malesuada consequat at. Auctor commodo conubia
          pellentesque erat tempor id integer primis donec, montes inceptos
          posuere condimentum sapien nam vehicula est, iaculis mollis lacinia
          parturient netus ornare imperdiet dui. Nascetur aliquam erat
          condimentum elementum nostra sapien penatibus cras enim congue, orci
          volutpat morbi quis litora magnis arcu habitasse sed, quisque
          ultricies id interdum turpis eget mollis mauris convallis. Lorem ipsum
          dolor sit amet consectetur adipiscing elit, pulvinar litora placerat
          ornare cubilia maecenas massa, lacinia fermentum nullam malesuada
          consequat at. Auctor commodo conubia pellentesque erat tempor id
          integer primis donec, montes inceptos posuere condimentum sapien nam
          vehicula est, iaculis mollis lacinia parturient netus ornare imperdiet
          dui. Nascetur aliquam erat condimentum elementum nostra sapien
          penatibus cras enim congue, orci volutpat morbi quis litora magnis
          arcu habitasse sed, quisque ultricies id interdum turpis eget mollis
          mauris convallis. Lorem ipsum dolor sit amet consectetur adipiscing
          elit, pulvinar litora placerat ornare cubilia maecenas massa, lacinia
          fermentum nullam malesuada consequat at. Auctor commodo conubia
          pellentesque erat tempor id integer primis donec, montes inceptos
          posuere condimentum sapien nam vehicula est, iaculis mollis lacinia
          parturient netus ornare imperdiet dui. Nascetur aliquam erat
          condimentum elementum nostra sapien penatibus cras enim congue, orci
          volutpat morbi quis litora magnis arcu habitasse sed, quisque
          ultricies id interdum turpis eget mollis mauris convallis.
        </Text>
      </Box>
      <Box>
        <Center>
          <h1 ref={targetRef}>COMENTARIOS</h1>
        </Center>

        {loading
          ? (
          <>
            <Spinner isLoading color='blue' size={40} />
            <ul>
              <li>
                <Skeleton mt='2' mr='10' mb='2' ml='10' height='20px' />
              </li>
              <li>
                <Skeleton mt='2' mr='10' mb='2' ml='10' height='20px' />
              </li>
              <li>
                <Skeleton mt='2' mr='10' mb='2' ml='10' height='20px' />
              </li>
              <li>
                <Skeleton mt='2' mr='10' mb='2' ml='10' height='20px' />
              </li>
              <li>
                <Skeleton mt='2' mr='10' mb='2' ml='10' height='20px' />
              </li>
              <li>
                <Skeleton mt='2' mr='10' mb='2' ml='10' height='20px' />
              </li>
            </ul>
          </>
            )
          : (
          <ul>
            {newsDetailCommentsReducer.map((comments) => {
              return (
                <Box m='3' borderWidth='1px' p='2' key={comments.id}>
                  {comments.text}
                </Box>
              );
            })}
          </ul>
            )}
      </Box>
    </>
  );
};

export default NewsDetail;
