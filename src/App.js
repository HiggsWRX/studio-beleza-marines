import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';


import Navbar from './components/Navbar';
import TopInfo from './components/TopInfo';
import Landing from './components/Landing';
import Services from './components/Services';
import Products from './components/Products';
import Team from './components/Team';
import Footer from './components/Footer';
import * as ROUTES from './constants/routes';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <TopInfo />
        <Navbar />

        <Landing />
        <Services />
        <Products />
        <Team />

        <Footer />
      </Router>
    </ParallaxProvider>
  );
}

export default App;
