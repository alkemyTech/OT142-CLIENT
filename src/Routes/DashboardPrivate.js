import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/Sidebar';
import BackOfficeActivities from '../Components/Activities/backoffice';
import TableCategorie from '../Components/Categories/TableCategorie';
import Dashboard from '../Components/Dashboard';
import EditForm from '../Components/Dashboard/EditForm';
import EditHomeForm from '../Components/Dashboard/editHomeForm';
import OrganizationBoard from '../Components/Dashboard/OrganizationBoard';
import UserList from '../Components/Dashboard/UsersList';
import Members from '../Components/Members/Members';
import NewsForm from '../Components/News/NewsForm';
import BackofficeNews from '../Components/News/Backoffice';
import SlidesForm from '../Components/Slides/SlidesForm';
import PageNotFound from '../Components/PageNotFound';
import { Container, Stack } from '@chakra-ui/react';
import TestimonialForm from '../Components/Testimonials/TestimonialsForm';
import CategoriesForm from '../Components/Categories/CategoriesForm';
import UserForm from '../Components/Users/UsersForm';
import ActivitiesForm from '../Components/Activities/ActivitiesForm';

const DashboardPrivate = () => {
  const history = useHistory();

  useEffect(() => {
    sessionStorage.getItem('login-role') !== '1' && history.push('/login');
  }, []);

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
            <Route exact path="/backoffice/news" component={BackofficeNews} />
            <Route exact path="/backoffice/news/create" component={NewsForm} />
            <Route exact path="/backoffice/news/:id" component={NewsForm} />
            {/* faltacomponente formulario actividades */}
            <Route exact path="/backoffice/activities/create" component={ActivitiesForm} />
            <Route exact path="/backoffice/activities" component={BackOfficeActivities} />
            {/* falta componente para el editar actividades */}
            <Route exact path="/backoffice/activities/:id" component={BackOfficeActivities} />
            <Route exact path="/backoffice/users" component={UserList} />
            <Route exact path="/backoffice/categories/create" component={CategoriesForm} />
            <Route exact path="/backoffice/create-user" component={UserForm} />
            <Route exact path="/backoffice/edit-user" component={UserForm} />
            <Route exact path="/backoffice/members/create" component={Members} />
            <Route exact path="/backoffice/categories" component={TableCategorie} />
            <Route exact path="/backoffice/create-testimonials" component={TestimonialForm} />
            <Route exact path="/backoffice/*" component={PageNotFound} />
        </Switch>
      </Stack>
    </Container>
  );
};

export default DashboardPrivate;
