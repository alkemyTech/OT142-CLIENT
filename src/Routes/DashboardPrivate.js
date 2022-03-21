import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/Sidebar';
import BackOfficeActivities from '../Components/Activities/backoffice';
import TableCategorie from '../Components/Categories/TableCategorie';
import Dashboard from '../Components/Dashboard';
import EditForm from '../Components/Dashboard/EditForm';
import EditHomeForm from '../Components/Dashboard/editHomeForm';
import OrganizationBoard from '../Components/Dashboard/OrganizationBoard';
import UserList from '../Components/Dashboard/UsersList';
import MembersForm from '../Components/Members/MembersForm';
import NewsForm from '../Components/News/NewsForm';
import NewsList from '../Components/News/NewsList';
import SlidesForm from '../Components/Slides/SlidesForm';
import PageNotFound from '../Components/PageNotFound';
import { Container, Stack } from '@chakra-ui/react';

const DashboardPrivate = () => {
  return (
  // Este es el layour del backend arreglar responsive con display flex y columna cuando es mobile
    <Container maxW='100%' p={0}>
      <Stack maxW='100%' direction={['column', 'column', 'row']} >
        <Sidebar />
        <Switch>
            <Route exact path="/backoffice" component={Dashboard} />
            <Route exact path="/backoffice/slide" component={SlidesForm} />
            <Route exact path="/backoffice/organization" component={OrganizationBoard} />
            <Route exact path="/backoffice/organization/edit" component={EditForm} />
            <Route exact path="/backoffice/organization/edit-home" component={EditHomeForm} />
            <Route exact path="/backoffice/news" component={NewsList} />
            <Route exact path="/backoffice/news/create" component={NewsForm} />
            <Route exact path="/backoffice/news/:id" component={NewsForm} />
            <Route exact path="/backoffice/activities" component={BackOfficeActivities} />
            <Route exact path="/backoffice/users" component={UserList} />
            <Route exact path="/backoffice/members/create" component={MembersForm} />
            <Route exact path="/backoffice/categories" component={TableCategorie} />
            <Route exact path="/backoffice/*" component={PageNotFound} />
        </Switch>
      </Stack>
    </Container>
  );
};

export default DashboardPrivate;