import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
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
import Dashboard from "./Components/Dashboard/index.js";
import OrganizationBoard from "./Components/Dashboard/OrganizationBoard.js";
import { NewsDetail } from './Components/News/Detail/NewsDetail'
import EditForm from "./Components/Dashboard/EditForm";
import RegisterForm from "./Components/Auth/RegisterForm";
<<<<<<< HEAD
import ContactForm from './Components/Contact/ContactForm';
import EditHomeForm from './Components/Dashboard/editHomeForm';

=======
import Contact from './Components/Contact';
import Footer from "./Components/Footer";
<<<<<<< HEAD
>>>>>>> 2550e39c419e8701d171fe760bfbe48fdc5d42cb
=======
import Home from "./Components/Home";
import MembersList from './Components/AboutUs/MembersList';
import UserList from './Components/Dashboard/UsersList';
>>>>>>> 041eec2818efceb20f2ea8fb44b27ae176a13ad5

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
<<<<<<< HEAD
          {/* <Route path="/" exact component={} />           Esta ruta debe ser para el Home */}
<<<<<<< HEAD
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/Novedades/:id" component={NewsDetail} />
          <Route path="/backoffice"  component={Dashboard}/>
          <Route path="/backoffice/organization" component={EditHomeForm} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/backoffice/organization/edit" component={EditForm} />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={UserForm} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
          <Route path="/actividades/:id" component={ActivityDetail} />
          <Route path="/actividades" component={Activities} />
          <Route path="/register" component={RegisterForm} />
          <Route path='/contact-form' component={ContactForm} />
=======
=======
          <Route path="/" exact component={Home} />
>>>>>>> 041eec2818efceb20f2ea8fb44b27ae176a13ad5
          <Route exact path="/create-activity" component={ActivitiesForm} />
          <Route exact path="/create-category" component={CategoriesForm} />
          <Route exact path="/Novedades/:id" component={NewsDetail} />
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
<<<<<<< HEAD
>>>>>>> 2550e39c419e8701d171fe760bfbe48fdc5d42cb
=======
          <Route exact path='/about-us/members' component={MembersList} />
>>>>>>> 041eec2818efceb20f2ea8fb44b27ae176a13ad5
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
