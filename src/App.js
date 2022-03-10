import React from "react";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActivitiesForm from "./Components/Activities/ActivitiesForm";
import CategoriesForm from "./Components/Categories/CategoriesForm";
import NewsForm from "./Components/News/NewsForm";
import SlidesForm from "./Components/Slides/SlidesForm";
import CarouselSlides from "./Components/Slides/CarouselSlides";
import TestimonialForm from "./Components/Testimonials/TestimonialsForm";
import UserForm from "./Components/Users/UsersForm";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import MembersForm from "./Components/Members/MembersForm";
import Members from "./Components/Members/Members";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import ActivityDetail from "./Activities/Detail/Components/ActivityDetail";
import Activities from "./Activities/Detail/Components/Activities";
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
            {/* <Route path="/" exact component={} />           Esta ruta debe ser para el Home */}
            <Route path="/create-activity" component={ActivitiesForm} />
            <Route path="/create-category" component={CategoriesForm} />
            <Route path="/create-news" component={NewsForm} />
            <Route exact path="/backoffice" component={Dashboard} />
            <Route path="/backoffice/members/edit" component={Members} />
            <Route path="/backoffice/create-slide" component={SlidesForm} />
            <Route path="/create-testimonials" component={TestimonialForm} />
            <Route path="/create-user" component={UserForm} />
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
