/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from '../Components/Loader';
import FooterPublic from '../Components/Footer/FooterPublic';
import WithSubnavigation from '../Components/Header';
// import PageNotFound from '../Components/PageNotFound';
import News from '../Components/News';
import NewsForm from '../Components/News/NewsForm';
import NewsDetail from '../Components/News/Detail/NewsDetail';

// import Layout from '../Components/Layout';
// import { AnimatedSwitch, spring } from 'react-router-transition';
import PageNotFound from '../Components/PageNotFound';
// import TestimonialList from '../Components/Testimonials/TestimonialsList';
import Login from '../Components/Auth/Login';
const Home = React.lazy(() => import('../Components/Home'));
const Activities = React.lazy(() =>
  import('../Components/Activities/Activities')
);
const RegisterForm = React.lazy(() =>
  import('../Components/Auth/RegisterForm')
);
const Contact = React.lazy(() => import('../Components/Contact'));
const About = React.lazy(() => import('../Components/About'));
const ActivitiesForm = React.lazy(() =>
  import('../Components/Activities/ActivitiesForm')
);

const UserForm = React.lazy(() => import('../Components/Users/UsersForm'));
const ProjectsForm = React.lazy(() =>
  import('../Components/Projects/ProjectsForm')
);
const ActivityDetail = React.lazy(() =>
  import('../Components/Activities/ActivityDetail')
);
const MembersList = React.lazy(() =>
  import('../Components/AboutUs/MembersList')
);
const LoginForm = React.lazy(() => import('../Components/Auth/LoginForm'));
const TestimonialList = React.lazy(() =>
  import('../Components/Testimonials/TestimonialsList')
);

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
          <Suspense fallback={<Loader />}>
            <Route exact path='/' component={Home} />
            <Route exact path='/registro' component={RegisterForm} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/contacto' component={Contact} />
            <Route exact path='/nosotros' component={About} />
            <Route exact path='/actividades' component={Activities} />
            <Route exact path='/create-activity' component={ActivitiesForm} />
            <Route exact path='/actividades/:id' component={ActivityDetail} />
            <Route exact path='/novedades' component={News} />
            <Route exact path='/novedades/:id' component={NewsDetail} />
            <Route exact path='/create-news' component={NewsForm} />
            <Route exact path='/testimonials' component={TestimonialList} />
            <Route exact path='/create-user' component={UserForm} />
            <Route exact path='/create-project' component={ProjectsForm} />
            <Route exact path='/update-project/:id' component={ProjectsForm} />
            <Route exact path='/about-us/members' component={MembersList} />
          </Suspense>
          <Route path='/*' component={PageNotFound} />
        </Switch>
      </main>
      <FooterPublic />
    </>
  );
};

export default DashboardPublic;
