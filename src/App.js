import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import SlidesForm from './Components/Slides/SlidesForm';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import UserForm from './Components/Users/UsersForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import MembersForm from './Components/Members/MembersForm';
import ProjectsForm from './Components/Projects/ProjectsForm';
import ActivityDetail from './Activities/Detail/Components/ActivityDetail';
import Activities from './Activities/Detail/Components/Activities';
import Dashboard from "./Components/Dashboard/Dashboard";
import { NewsDetail } from './Components/News/Detail/NewsDetail'
import EditForm from "./Components/Dashboard/EditForm";
import RegisterForm from "./Components/Auth/RegisterForm";
import ContactForm from './Components/Contact/ContactForm';


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" exact component={} />           Esta ruta debe ser para el Home */}
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/Novedades/:id" component={NewsDetail} />
          <Route path="/backoffice" component={Dashboard} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/backoffice/organization/edit" component={EditForm} />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={UserForm} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/update-project/:id" component={ProjectsForm} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
          <Route path="/actividades/:id" component={ActivityDetail} />
          <Route path="/actividades" component={Activities} />
          <Route path="/register" component={RegisterForm} />
          <Route path='/contact-form' component={ContactForm} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
