import { Route } from 'react-router';

const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
        {...rest}
        component = { (props) => <Component {...props}/> }
    />
  );
};

export default PublicRoute;
