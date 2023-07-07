import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';

import Home from './components/pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
