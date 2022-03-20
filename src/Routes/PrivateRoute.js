import { Route } from 'react-router';

const PrivateRoute = ({
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

export default PrivateRoute;
