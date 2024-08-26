import React from 'react';
import Navbar from '../components/navbar/navbar'; 
import Hero from '../components/hero/hero'; 
import Button from '../components/button/button'; 
import Hero3 from '../components/hero2/hero3';
import SignUpPage from '../components/sign/sign'; // Updated import
import Menu from '../components/menu/menu'

const HomePage = () => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component with JSX */}
      <Hero /> {/* Render the Hero component with JSX */}
      <Menu />
      <Button />
      <Hero3/>
      <SignUpPage /> {/* Render the SignUpPage component with JSX */}
    </div>
  );
}

export default HomePage;
