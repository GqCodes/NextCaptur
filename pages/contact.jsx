import React from 'react';
import Contact from '../components/Contact';
import Hero from '../components/Hero';

const contact = () => {
  return (
    <div>
      <Hero heading='Contact Us' message='Please feel free to contact us below' />
      <Contact />
    </div>
  );
};

export default contact;
