import { Route } from 'react-router';

const PrivateRoute = ({
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
