
import './App.css';
import Contact from './Components/Contact';
import ContactSection from './Components/ContactSection';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
// import Pricing from './Components/Pricing';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import InnovationSection from './Components/InnovationSection';
import EnterpriseSuite from './Components/EnterpriseSuite';
import IndustriesSection from './Components/IndustriesSection';
import AnimatedStats from './Components/AnimatedStats';

function Home(){
  document.title="Home | Kuberpays"
  return(
<>
<Navbar/>
<Hero/>
<ContactSection/>
<InnovationSection/>
<EnterpriseSuite/>
<IndustriesSection/>
<AnimatedStats/>
</>


  )
}




function App() {
  return (
 <div>
  <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Home />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
