import React from 'react';
import Navbar from './components/navbar/navbar'; 
import Hero from './components/hero/hero'; 
import Button from './components/button/button'; 
import Hero2 from './components/hero2/hero2';
import SignUpPage from './components/sign/sign'; // Updated import

const App = () => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component with JSX */}
      <Hero /> {/* Render the Hero component with JSX */}
      <Button />
      <Hero2/>
      <SignUpPage /> {/* Render the SignUpPage component with JSX */}
    </div>
  );
}

export default App;
