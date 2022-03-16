import React from 'react';

import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import ActivityDetail from "./Components/Activities/ActivityDetail";
import Activities from "./Components/Activities/Activities";
import OrganizationBoard from "./Components/Dashboard/OrganizationBoard.js";
import { NewsDetail } from "./Components/News/Detail/NewsDetail";
import RegisterForm from "./Components/Auth/RegisterForm";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Home from "./Components/Home";
import MembersList from './Components/AboutUs/MembersList';
import { AlertRoute } from "./Services/AlertServicie/AlertRoute";
import ContactOngDate from './Components/Contact/ContactOngDate'

// import ContactForm from "./Components/Contact";
import { News } from './Components/News';
import EditHomeForm from './Components/Dashboard/editHomeForm';

import ContactForm from "./Components/Contact/ContactForm"
import { Layout } from "./Backoffice/";
import { PageNotFound } from "./Components/PageNotFound/PageNotFound";

function App() {
  const backofficeRoutes = ["/backoffice", "/backoffice/*"];
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/*" component={PageNotFound} />
          
          <Route path={backofficeRoutes}>
            <Layout/>
          </Route>
          
          <Route exact path="/Novedades/" component={News} />
          <Route exact path="/Novedades/:id" component={NewsDetail} />
          <Route exact path="/school-campaign" component={SchoolCampaign} />
          <Route exact path="/toys-campaign" component={ToysCampaign} />
          <Route exact path="/actividades/:id" component={ActivityDetail} />
          <Route exact path="/actividades" component={Activities} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/contact-form" component={ContactForm} />
          <Route exact path="/nosotros" component={About} />
          <Route exact path="/about-us/members" component={MembersList} />
          <Route exact path='/contacto' component={ContactOngDate} />
          <Route exact path='/nosotros' component={About} />
          <Route exact path='/about-us/members' component={MembersList} />
          {/* <Route exact path='/alert' component={AlertServicie} /> */}
          <Route exact path='/alert' component={AlertRoute} />       

        </Switch>
      </BrowserRouter>
      <div className="App">
        <header className="App-header"></header>
      </div>
    </>
  )
}

export default App;
