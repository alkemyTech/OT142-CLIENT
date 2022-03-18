import { Route, Switch, useRouteMatch } from 'react-router-dom';
import BackOfficeActivities from '../Activities/backoffice';
import TableCategorie from '../Categories/TableCategorie';
import Dashboard from '../Dashboard';
import EditForm from '../Dashboard/EditForm';
import EditHomeForm from '../Dashboard/editHomeForm';
import OrganizationBoard from '../Dashboard/OrganizationBoard';
import UserList from '../Dashboard/UsersList';
import MembersForm from '../Members/MembersForm';
import NewsForm from '../News/NewsForm';
import NewsList from '../News/NewsList';
import SlidesForm from '../Slides/SlidesForm';

const BackOfficeRouter = () => {
  const { path } = useRouteMatch();

  return (
      <Switch>
          <Route exact path={path}>
              <Dashboard modulePath={path} />
          </Route>
          <Route exact path={`${path}/create-slide`} component={SlidesForm} />
          <Route exact path={`${path}/organization/edit`} component={EditForm} />
          <Route exact path={`${path}/organization/edit-home`} component={EditHomeForm} />
          <Route exact path={`${path}/organization`} component={OrganizationBoard} />
          <Route exact path={`${path}/news/create`} component={NewsForm} />
          <Route exact path={`${path}/news/:id`} component={NewsForm} />
          <Route exact path={`${path}/news`} component={NewsList} />
          <Route exact path={`${path}/activities`} component={BackOfficeActivities} />
          <Route exact path={`${path}/users`} component={UserList} />
          <Route exact path={`${path}/members/create`} component={MembersForm} />
          <Route exact path={`${path}/categories`} component={TableCategorie} />
          {/* <Route path={`${path}/members/edit`} component={MembersEdit} /> */}

      </Switch>
  );
};

export default BackOfficeRouter;
