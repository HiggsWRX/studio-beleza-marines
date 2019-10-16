import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';


import Navbar from './components/Navbar';
import TopInfo from './components/TopInfo';
import Landing from './components/Landing';
import Services from './components/Services';
import Products from './components/Products';
import Team from './components/Team';
import Location from './components/Location';
import Footer from './components/Footer';
import * as ROUTES from './constants/routes';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <section id="container">
          <TopInfo />
          <Navbar />

          <Landing />
          <Services />
          <Products />
          <Team />
          <Location />

          <Footer />
        </section>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
