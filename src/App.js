
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
// <<<<<<< development
// import RequestCallback from './Components/RequestCallback';
// import ClientUnderstanding from './Components/ClientUnderstanding';
// import DevelopersSection from './Components/DevelopersSection';
// =======
// import PaymentGateway from './Components/PaymentGatewayInfo';
// import PaymentGatewayInfo from './Components/PaymentGatewayInfo';
// import PaymentGatewayHero from './Components/PaymentGatewayHero';
// >>>>>>> Main

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
{/* <RequestCallback/> */}
<ClientUnderstanding/>
<AnimatedStats/>
<Footer/>
</>


  )
}

// <<<<<<< development
// function DevelopersComponent(){
//   return (
// <>
// <Navbar/>
// <DevelopersSection/>

// =======
// function Payment(){
//   document.title="PaymentGateway | Kuberpays"
//   return(
// <>
// <Navbar/>
// <PaymentGatewayHero/>
// <PaymentGatewayInfo/>
// </>
//   )
// }
// >>>>>>> Main


</>



  )
}


function App() {
  return (
 <div>
  <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Home />} />
// <<<<<<< development
//              <Route path="/developers" element={<DevelopersComponent />} />
// =======
//           <Route path="/payment-gateway" element={<Payment />} />
// >>>>>>> Main
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
