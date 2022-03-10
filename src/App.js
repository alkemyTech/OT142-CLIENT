import React from "react";

import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActivitiesForm from "./Components/Activities/ActivitiesForm";
import CategoriesForm from "./Components/Categories/CategoriesForm";
import NewsForm from "./Components/News/NewsForm";
import SlidesForm from "./Components/Slides/SlidesForm";
import TestimonialForm from "./Components/Testimonials/TestimonialsForm";
import UserForm from "./Components/Users/UsersForm";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import MembersForm from "./Components/Members/MembersForm";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import ActivityDetail from "./Components/Activities/ActivityDetail";
import Activities from "./Components/Activities/Activities";
import Dashboard from "./Components/Dashboard/index.js";
import OrganizationBoard from "./Components/Dashboard/OrganizationBoard.js";
import { NewsDetail } from "./Components/News/Detail/NewsDetail";
import EditForm from "./Components/Dashboard/EditForm";
import RegisterForm from "./Components/Auth/RegisterForm";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import About from "./Components/About";
import BackOfficeActivities from "./Components/Activities/backoffice";
import Home from "./Components/Home";
import MembersList from './Components/AboutUs/MembersList';
import UserList from './Components/Dashboard/UsersList'; 
import { ChakraProvider } from '@chakra-ui/react'
import AlertServicie from "./Services/AlertServicie/AlertServicie";
import { AlertRoute } from "./Services/AlertServicie/AlertRoute";
import ContactOngDate from './Components/Contact/ContactOngDate'
import NewsList from "./Components/News/NewsList";
import TableCategorie from "./Components/Categories/TableCategorie";

//import ContactForm from "./Components/Contact";
import { News } from "./Components/News";
import EditHomeForm from "./Components/Dashboard/editHomeForm";

import ContactForm from "./Components/Contact/ContactForm"

function App() {
  return (
    <>
      <ChakraProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/create-activity" component={ActivitiesForm} />
          <Route exact path="/Novedades/" component={News} />
          <Route exact path="/Novedades/:id" component={NewsDetail} />
          <Route exact path="/backoffice" component={Dashboard} />
          <Route exact path="/backoffice/create-slide" component={SlidesForm} />
          <Route exact path="/backoffice/organization/edit" component={EditForm} />
          <Route exact path="/backoffice/organization/edit-home" component={EditHomeForm} />
          <Route exact path="/backoffice/organization" component={OrganizationBoard} />

          {/* <Route exact path="/backoffice/slides" component={SlidesTable} /> */}
          <Route exact path="/backoffice/news/create" component={NewsForm} />
          <Route exact path="/backoffice/news/:id" component={NewsForm} />
          <Route path="/backoffice/news" component={NewsList} />
          <Route exact path="/backoffice/activities" component={BackOfficeActivities} />
          <Route exact path="/backoffice/users" component={UserList} />
          <Route exact path="/create-testimonials" component={TestimonialForm} />
          <Route exact path="/create-news" component={NewsForm} />
          <Route exact path="/create-user" component={UserForm} />
          <Route exact path="/backoffice/members/create" component={MembersForm} />
          <Route exact path="/create-project" component={ProjectsForm} />
          <Route exact path="/update-project/:id" component={ProjectsForm} />
          <Route exact path="/school-campaign" component={SchoolCampaign} />
          <Route exact path="/toys-campaign" component={ToysCampaign} />
          <Route exact path="/actividades/:id" component={ActivityDetail} />
          <Route exact path="/actividades" component={Activities} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path='/contacto' component={ContactOngDate} />
          <Route exact path='/contact-form' component={ContactForm} />
          <Route exact path='/nosotros' component={About} />
          <Route exact path='/about-us/members' component={MembersList} />
          {/* <Route exact path='/alert' component={AlertServicie} /> */}
          <Route exact path='/alert' component={AlertRoute} />
          {/* <Route path="/backoffice/members/edit" component={MembersEdit} /> */}
          <Route path="/create-member" component={MembersForm} />
          <Route path="/backoffice-categories" component={TableCategorie} />
        </Switch>
      </BrowserRouter>
      </ChakraProvider>
      <div className="App">
        <header className="App-header"></header>
      </div>
    </>
  );
}

export default App;
