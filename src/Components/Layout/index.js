import WithSubnavigation from '../Header';
import FooterPublic from '../Footer/FooterPublic';
import { useHistory } from 'react-router-dom';

const Layout = ({ children }) => {
  const history = useHistory();
  return (
    <>
      {!history.location.pathname.includes('campaign') &&
        <>
          <WithSubnavigation />
            {children}
          <FooterPublic />
        </>
      }
    </>
  );
};
export default Layout;
