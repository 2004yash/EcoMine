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
// import ExpenseChart from '../components/Graph/ExpenseChart';
import WhyChooseUs from '../components/whychooseus/whychooseus';
const HomePage = () => {
  return (
    <div>
      <Navbar />  
      <Hero /> {/* Render the Hero component with JSX */}
      <Menu />
      {/* <WhyChooseUs /> */}
      <Chatbot />
      {/* <App /> */}
      <SignUpPage /> 
      {/* <ExpenseChart /> */}
      {/* <News /> */}
      <Footer />
      {/* <Button /> */}
      {/* <Hero3/> */}
      {/* Render the SignUpPage component with JSX */}
    </div>
  );
}

export default HomePage;