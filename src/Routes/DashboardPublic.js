import React from 'react';
import FooterPublic from '../Components/Footer/FooterPublic';
import { Route, Switch } from 'react-router-dom';
import WithSubnavigation from '../Components/Header';
import Home from '../Components/Home';
import Activities from '../Components/Activities/Activities';
import RegisterForm from '../Components/Auth/RegisterForm';
import Contact from '../Components/Contact';
import About from '../Components/About';
import ActivitiesForm from '../Components/Activities/ActivitiesForm';
import { News } from '../Components/News';
import { NewsDetail } from '../Components/News/Detail/NewsDetail';
import NewsForm from '../Components/News/NewsForm';
import UserForm from '../Components/Users/UsersForm';
import ProjectsForm from '../Components/Projects/ProjectsForm';
import ActivityDetail from '../Components/Activities/ActivityDetail';
import MembersList from '../Components/AboutUs/MembersList';
import LoginForm from '../Components/Auth/LoginForm';
// import Layout from '../Components/Layout';
// import { AnimatedSwitch, spring } from 'react-router-transition';
import PageNotFound from '../Components/PageNotFound';
import TestimonialList from '../Components/Testimonials/TestimonialsList';
import Login from '../Components/Auth/Login';

/* <AnimatedSwitch
    atEnter={{ opacity: 0, translateX: -100 }}
    atActive={{ opacity: bounce(1), translateX: bounce(0) }}
    atLeave={{ opacity: bounce(1), translateX: bounce(100) }}
    mapStyles={mapStyles}
    className="route-wrapper"
> */

// function mapStyles (styles) {
//   return {
//     opacity: styles.opacity,
//     transform: `translateX(${styles.translateX}%)`
//   };
// }

// function bounce (val) {
//   return spring(val, {
//     stiffness: 300,
//     damping: 40
//   });
// }

const DashboardPublic = () => {
  return (
    <>
      <WithSubnavigation />
      <main style={{ width: '100%', minHeight: '500px' }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/actividades' component={Activities} />
          <Route exact path='/registro' component={RegisterForm} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/contacto' component={Contact} />
          <Route exact path='/nosotros' component={About} />
          <Route exact path='/create-activity' component={ActivitiesForm} />
          <Route exact path='/Novedades/' component={News} />
          <Route exact path='/Novedades/:id' component={NewsDetail} />
          <Route exact path='/testimonials' component={TestimonialList} />
          <Route exact path='/create-news' component={NewsForm} />
          <Route exact path='/create-user' component={UserForm} />
          <Route exact path='/create-project' component={ProjectsForm} />
          <Route exact path='/update-project/:id' component={ProjectsForm} />
          <Route exact path='/actividades/:id' component={ActivityDetail} />
          <Route exact path='/actividades' component={Activities} />
          <Route exact path='/about-us/members' component={MembersList} />
          <Route exact path='/nosotros' component={About} />
          <Route exact path='/about-us/members' component={MembersList} />
          <Route path='/*' component={PageNotFound} />
        </Switch>
      </main>
      <FooterPublic />
    </>
  );
};

export default DashboardPublic;
