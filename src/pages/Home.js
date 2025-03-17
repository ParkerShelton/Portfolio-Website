import React from 'react';
import Hero from '../components/Hero';
import Developing from '../components/Developing';
import ThreeDModeling from '../components/3DModeling';
import Art from '../components/Art';

function Home() {
  return (
    <>
      <Hero />
      <Developing />
      <ThreeDModeling />
      <Art />
    </>
  );
}

export default Home;
