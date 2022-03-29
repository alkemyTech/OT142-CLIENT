import React from 'react';
import Date from './Date';

// import { IconName } from "react-icons/fa";

export default function ContactDate () {
  const ongContact = {
    mail: 'somosfundacionmas@gmail.com',
    instagram: 'SomosMás',
    facebook: 'Somos_Más',
    phone: 1160112988
  };
  return (
    <>
      <Date {...ongContact} />
    </>
  );
}
