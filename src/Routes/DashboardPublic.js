import React from 'react';
import FooterPublic from '../Components/Footer/FooterPublic';
import { Route, Switch } from 'react-router-dom';
import WithSubnavigation from '../Components/Header';
import Home from '../Components/Home';
import Activities from '../Components/Activities/Activities';
import RegisterForm from '../Components/Auth/RegisterForm';
import Contact from '../Components/Contact';
import About from '../Components/About';
// import Layout from '../Components/Layout';
// import { AnimatedSwitch, spring } from 'react-router-transition';
import { PageNotFound } from '../Components/PageNotFound/PageNotFound';
// import { AnimatedSwitch, spring } from 'react-router-transition';

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
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/actividades" component={Activities} />
                    <Route exact path="/registro" component={RegisterForm} />
                    <Route exact path="/contacto" component={Contact} />
                    <Route exact path="/nosotros" component={About} />
                    <Route path="/*" component={PageNotFound} />
                </Switch>
            </main>
        <FooterPublic />
    </>
  );
};

export default DashboardPublic;
