
import './App.css';
import Contact from './Components/Contact';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Pricing from './Components/Pricing';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Features/>
     <Pricing/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
