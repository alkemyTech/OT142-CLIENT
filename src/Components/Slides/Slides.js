import React from 'react'
import SlidesForm from './SlidesForm';

export default function Slides() {
    const state = {
        name: "santi",
        description: "enano",
        image: "",
        order:""
      };
  return (
      <><SlidesForm props={state}> </SlidesForm></>
     
  )
}
