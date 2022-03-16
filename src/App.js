import React from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import ActivityDetail from './Components/Activities/ActivityDetail';
import Activities from './Components/Activities/Activities';
import Dashboard from './Components/Dashboard/index.js';
// import OrganizationBoard from './Components/Dashboard/OrganizationBoard.js';
import { NewsDetail } from './Components/News/Detail/NewsDetail';
import EditForm from './Components/Dashboard/EditForm';
import RegisterForm from './Components/Auth/RegisterForm';
import Contact from './Components/Contact';
// import Footer from './Components/Footer';
import About from './Components/About';
import BackOfficeActivities from './Components/Activities/backoffice';
import Home from './Components/Home';
import MembersList from './Components/AboutUs/MembersList';
import UserList from './Components/Dashboard/UsersList';
// import { ChakraProvider } from '@chakra-ui/react';
import { AlertRoute } from './Services/AlertServicie/AlertRoute';
import ContactOngDate from './Components/Contact/ContactOngDate';
import NewsList from './Components/News/NewsList';
import TableCategorie from './Components/Categories/TableCategorie';

// import ContactForm from "./Components/Contact";
import { News } from './Components/News';
// import EditHomeForm from './Components/Dashboard/editHomeForm';

import ContactForm from './Components/Contact/ContactForm';
import { PageNotFound } from './Components/PageNotFound/PageNotFound';

function App () {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route exact path="/create-activity" element={<ActivitiesForm/>} />
          <Route exact path="/Novedades/" element={<News/>} />
          <Route exact path="/Novedades/:id" element={<NewsDetail/>} />
          <Route exact path="/backoffice" element={<Dashboard/>} />
          <Route exact path="/backoffice/create-slide" element={<SlidesForm/>} />
          <Route exact path="/backoffice/organization/edit" element={<EditForm/>} />
          {/*           <Route exact path="/backoffice/organization/edit-home" component={EditHomeForm} /> */}

          {/* <Route exact path="/backoffice/slides" component={SlidesTable} /> */}
          <Route exact path="/backoffice/news/create" element={<NewsForm/>} />
          <Route exact path="/backoffice/news/:id" element={<NewsForm/>} />
          <Route path="/backoffice/news" element={<NewsList/>} />
          <Route exact path="/backoffice/activities" element={<BackOfficeActivities/>} />
          <Route exact path="/backoffice/users" element={<UserList/>} />
          <Route exact path="/create-testimonials" element={<TestimonialForm/>} />
          <Route exact path="/create-news" element={<NewsForm/>} />
          <Route exact path="/create-user" element={<UserForm/>} />
          <Route exact path="/backoffice/members/create" element={<MembersForm/>} />
          <Route exact path="/create-project" element={<ProjectsForm/>} />
          <Route exact path="/update-project/:id" element={<ProjectsForm/>} />
          <Route exact path="/school-campaign" element={<SchoolCampaign/>} />
          <Route exact path="/toys-campaign" element={<ToysCampaign/>} />
          <Route exact path="/actividades/:id" element={<ActivityDetail/>} />
          <Route exact path="/actividades" element={<Activities/>} />
          <Route exact path="/register" element={<RegisterForm/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/contact-form" element={<ContactForm/>} />
          <Route exact path="/nosotros" element={<About/>} />
          <Route exact path="/about-us/members" element={<MembersList/>} />
          <Route exact path='/contacto' element={<ContactOngDate/>} />
          <Route exact path='/contact-form' element={<ContactForm/>} />
          <Route exact path='/nosotros' element={<About/>} />
          <Route exact path='/about-us/members' element={<MembersList/>} />
          {/* <Route exact path='/alert' component={AlertServicie} /> */}
          <Route exact path='/alert' element={<AlertRoute/>} />
          {/* <Route path="/backoffice/members/edit" component={MembersEdit} /> */}
          <Route path="/create-member" element={<MembersForm/>} />
          <Route path="/backoffice-categories" element={<TableCategorie/>} />
          <Route path="/categories" element={<CategoriesForm/>} />
          <Route path="/*" element={<PageNotFound/>} />

        </Routes>
      </BrowserRouter>

      <div className="App">
        <header className="App-header"></header>
      </div>
    </>
  );
}

export default App;
