import React from 'react';
import Navbar from '../components/navbar/navbar'; 
import Hero from '../components/hero/hero'; 
import News from '../components/News/NewsComponent'; 
// import Button from '../components/button/button'; 
// import Hero3 from '../components/hero2/hero3';
import Chatbot from '../components/Chatbot/ChatbotComponent'
import SignUpPage from '../components/sign/sign'; // Updated import
import Menu from '../components/menu/menu'
import Footer from '../components/footer/footer';


const HomePage = () => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component with JSX */}
      <Hero /> {/* Render the Hero component with JSX */}
      <Menu />
      <Chatbot />
      <SignUpPage /> 
      <News />
      <Footer />
      {/* <Button /> */}
      {/* <Hero3/> */}
      {/* Render the SignUpPage component with JSX */}
    </div>
  );
}

export default HomePage;