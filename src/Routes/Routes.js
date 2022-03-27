import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import DashboardPublic from './DashboardPublic';
import DashboardPrivate from './DashboardPrivate';
import SchoolCampaign from '../Campaigns/School/SchoolCampaign';
import ToysCampaign from '../Campaigns/Toys/ToysCampaign';

const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route exact path='/school-campaign' component={SchoolCampaign}/>
            <Route exact path='/toys-campaign' component={ToysCampaign} />

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
