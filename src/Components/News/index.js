import Title from '../Titles';
import NewsList from './NewsList';
import LastEvent from './LastEvent';
import { Box } from '@chakra-ui/react';

export const News = () => {
  return (
    <>
      <Title children='Novedades' />
      <LastEvent />
      <Box mt={'10vh'}>
        <NewsList />
      </Box>
    </>
  );
};
