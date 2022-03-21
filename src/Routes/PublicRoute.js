import { Route } from 'react-router';

const PublicRoute = ({
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
