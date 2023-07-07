import React from 'react';
import Contents from '../layout/Contents';

import Welcome from '../section/Welcome';
import Intro from '../section/Intro';
import About from '../section/About';
import Image from '../section/Image';

const Home = () => {
  return (
    <>
      <Contents>
        <Welcome />
        <Intro />
        <About />
        <Image />
      </Contents>
    </>
  );
};

export default Home;
