import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Content from './Content';
import { FooterLandingPage } from '../../Components/Footer/FooterLandingPage';

const SchoolCampaign = () => {
  return (
    <>
      <Header />
      <Slider />
      <Content />
      <FooterLandingPage />
    </>
  );
};

export default SchoolCampaign;
