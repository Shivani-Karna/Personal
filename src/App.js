import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import '../src/index.css';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
<div>
{/* <h1>Hello</h1> */}
<Navbar/>
<Home/>  
<About/>   
<Skills/> 
<Portfolio/>  
<Contact/> 
<Footer/>    
</div>  
  )
}

export default App;