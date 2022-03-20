import Title from '../Titles';
import NewsList from './NewsList';
import LastEvent from './LastEvent';

export const News = () => {
  return (
    <>
      <Title children='Novedades' />
      <LastEvent />
      <NewsList />
    </>
  );
};
