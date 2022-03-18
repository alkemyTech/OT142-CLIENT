import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import UserForm from './Components/Users/UsersForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import MembersForm from './Components/Members/MembersForm';
import ProjectsForm from './Components/Projects/ProjectsForm';
import ActivityDetail from './Components/Activities/ActivityDetail';
import Activities from './Components/Activities/Activities';
import { NewsDetail } from './Components/News/Detail/NewsDetail';
import RegisterForm from './Components/Auth/RegisterForm';
import Contact from './Components/Contact';
import About from './Components/About';
import Home from './Components/Home';
import MembersList from './Components/AboutUs/MembersList';
import { AlertRoute } from './Services/AlertServicie/AlertRoute';
import ContactOngDate from './Components/Contact/ContactOngDate';
// import ContactForm from "./Components/Contact";
import { News } from './Components/News';
import ContactForm from './Components/Contact/ContactForm';
import { PageNotFound } from './Components/PageNotFound/PageNotFound';
import { AnimatedSwitch, spring } from 'react-router-transition';
import BackOfficeRouter from './Components/Routers/BackofficeRouter';

function mapStyles (styles) {
  return {
    opacity: styles.opacity,
    transform: `translateX(${styles.translateX}%)`
  };
}

function bounce (val) {
  return spring(val, {
    stiffness: 300,
    damping: 40
  });
}

function App () {
  return (
    <>
        <BrowserRouter>

          <AnimatedSwitch
            atEnter={{ opacity: 0, translateX: -100 }}
            atActive={{ opacity: bounce(1), translateX: bounce(0) }}
            atLeave={{ opacity: bounce(1), translateX: bounce(100) }}
            mapStyles={mapStyles}
            className="route-wrapper"
          >
            <Route path="/" exact component={Home} />
            <Route path='/backoffice' component={BackOfficeRouter} />
            <Route exact path="/create-activity" component={ActivitiesForm} />
            <Route exact path="/Novedades/" component={News} />
            <Route exact path="/Novedades/:id" component={NewsDetail} />
            <Route exact path="/create-testimonials" component={TestimonialForm} />
            <Route exact path="/create-news" component={NewsForm} />
            <Route exact path="/create-user" component={UserForm} />
            <Route exact path="/create-project" component={ProjectsForm} />
            <Route exact path="/update-project/:id" component={ProjectsForm} />
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
            <Route exact path='/contact-form' component={ContactForm} />
            <Route exact path='/nosotros' component={About} />
            <Route exact path='/about-us/members' component={MembersList} />
            {/* <Route exact path='/alert' component={AlertServicie} /> */}
            <Route exact path='/alert' component={AlertRoute} />
            <Route path="/create-member" component={MembersForm} />
            <Route path="/categories" component={CategoriesForm} />
            <Route path="/*" component={PageNotFound} />
          </AnimatedSwitch>

      </BrowserRouter>

      <div className="App">
        <header className="App-header"></header>
      </div>
    </>
  );
}

export default App;
