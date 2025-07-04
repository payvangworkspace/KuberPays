
import './App.css';
import Contact from './Components/Contact';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Pricing from './Components/Pricing';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function Home(){
  document.title="Home | Kuberpays"
  return(
<>
<Navbar/>
<Hero/>
<Pricing/>
<Contact/>
<Footer/>




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
