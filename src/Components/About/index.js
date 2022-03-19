import React from 'react';
import Title from '../Titles';
import AboutOng from './AboutOng';
import SocialMediaWidgets from './Widgets';

const About = () => {
  return (
    <>
        <Title imageUrl="">
          Nosotros
        </Title>
        <AboutOng />
        <SocialMediaWidgets/>
    </>
  );
};

export default About;
