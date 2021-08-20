import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/Navbar'
import Hero1 from './components/Hero1'
import OurWork from './components/OurWork';
import WhatWeDo from './components/WhatWeDo';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Hero1 />
    <OurWork />
    <WhatWeDo />
<Testimonial />
    <WhyChooseUs />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
