import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import DashboardPublic from './DashboardPublic';
import DashboardPrivate from './DashboardPrivate';

const Routes = () => {
  return (
    <Router>
        <Switch>
            <PrivateRoute
                path="/backoffice"
                component={DashboardPrivate}
            />
            <PublicRoute
                path="/"
                component={DashboardPublic}
            />
        </Switch>
    </Router>
  );
};

export default Routes;
