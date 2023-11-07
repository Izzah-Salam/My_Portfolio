import React from 'react';
import './App.css';
import Header from './components/header';
import MyComponent from './project';
import ContactForm from './contact';
import HeroSection from './components/hero-section';
import { BuyReview,  } from './Review';

function App() {
  return (
    <div className="App">
       <Header />
       <HeroSection/>
       <MyComponent/>
       <BuyReview/>
       {/* <SellerReview/> */}
      <h1 style={{"marginTop":"2rem", textAlign:"center"}}>Contact Us</h1>
      <ContactForm />

     
      
    </div>
  );

}

export default App;






