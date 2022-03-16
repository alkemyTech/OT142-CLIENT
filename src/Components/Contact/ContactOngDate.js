import React from 'react';
import ContactDate from './ContactDate';
import TitleContact from './TitleContact';
import MapViews from './ContactMap/MapView';

export default function ContactOngDate() {
  return (
    <>
      <div>
        <TitleContact />
        <ContactDate />
        <MapViews />
      </div>
    </>
  );
}
