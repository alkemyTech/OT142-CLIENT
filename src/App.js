import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import NewsList from './Components/News/NewListTable/NewsList';
import SlidesForm from './Components/Slides/SlidesForm';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import UserForm from './Components/Users/UsersForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import MembersForm from './Components/Members/MembersForm';
import ProjectsForm from './Components/Projects/ProjectsForm';
import ActivityDetail from './Activities/Detail/Components/ActivityDetail';
import Activities from './Activities/Detail/Components/Activities';
import Dashboard from "./Components/Dashboard/index.js";
import OrganizationBoard from "./Components/Dashboard/OrganizationBoard.js";
import { NewsDetail } from './Components/News/Detail/NewsDetail'
import EditForm from "./Components/Dashboard/EditForm";
import RegisterForm from "./Components/Auth/RegisterForm";
import Contact from './Components/Contact';
import Footer from "./Components/Footer";
import About from './Components/About';
import Home from "./Components/Home";
import MembersList from './Components/AboutUs/MembersList';
import UserList from './Components/Dashboard/UsersList';
import ActivitiesList from './Activities/Detail/Components/ActivitiesList';
import { News } from './Components/News';
import SlidesTable from './Components/Slides/SlidesTable';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/create-activity" component={ActivitiesForm} />
          <Route exact path="/create-category" component={CategoriesForm} />
          <Route exact path="/Novedades/" component={News} />
          <Route path="/backoffice/news" component={NewsList} />
          <Route exact path="/Novedades/:id" component={NewsDetail} />
          <Route exact path="/backoffice/slides" component={SlidesTable} />
          <Route exact path="/backoffice" component={Dashboard} />
          <Route exact path="/backoffice/create-slide" component={SlidesForm} />
          <Route exact path="/backoffice/organization/edit" component={EditForm} />
          <Route exact path="/backoffice/organization" component={OrganizationBoard} />
          <Route exact path="/backoffice/news/:id?" component={NewsForm} />
          <Route exact path="/backoffice/users" component={UserList} />
          <Route exact path="/create-testimonials" component={TestimonialForm} />
          <Route exact path="/create-user" component={UserForm} />
          <Route exact path="/create-member" component={MembersForm} />
          <Route exact path="/create-project" component={ProjectsForm} />
          <Route exact path="/update-project/:id" component={ProjectsForm} />
          <Route exact path="/school-campaign" component={SchoolCampaign} />
          <Route exact path="/toys-campaign" component={ToysCampaign} />
          <Route exact path="/actividades/:id" component={ActivityDetail} />
          <Route exact path="/actividades" component={Activities} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/nosotros' component={About} />
          <Route exact path='/about-us/members' component={MembersList} />
<<<<<<< HEAD
=======
          <Route path='/contact-form' component={ContactForm} />
>>>>>>> 19153dcf5a59235a32aec0b909adc7f877b3b240
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
