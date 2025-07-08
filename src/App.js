
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
import DevelopersSection from './Components/DevelopersSection';
// =======
// import PaymentGateway from './Components/PaymentGatewayInfo';
import PaymentGatewayInfo from './Components/PaymentGatewayInfo';
import PaymentGatewayHero from './Components/PaymentGatewayHero';
import IntegrationSection from './Components/IntegrationSection';
import AboutUsBanner from './Components/AboutUsBanner';
import AboutUs from './Components/AboutUs';
import { InvoiceBanner } from './Components/InvoiceBanner';
import InvoicingContent from './Components/InvoiceContent';
// >>>>>>> Main
import BusinessCreateAccount from './Components/BusinessCreateAccount';
import { VirtualBanner } from './Components/VirtualBanner';
import VirtualContent from './Components/VirtualContent';
import { WhiteLabelBanner } from './Components/WhiteLabelBanner';
import WhiteLabelContent from './Components/WhiteLabelContent';

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
{/* <ClientUnderstanding/> */}
<AnimatedStats/>
<Footer/>
</>


  )
}


function DevelopersComponent(){
  return (
<>
<Navbar/>
{/* <DevelopersSection/> */}
<IntegrationSection/>
<Footer/>
</>
  )
}


function AboutUsComponent(){
  return (
<>
<Navbar/>
<AboutUsBanner/>
<AboutUs/>
<Footer/>


</>


  )
}

function InvoiceComponent(){
  return (
    <>
  
    <Navbar/>
    <InvoiceBanner/>
    <InvoicingContent/>
    <BusinessCreateAccount/>
    
    <Footer/>
    
    
    
    </>
  )
}


function VirtualAccountComponent(){

  return(
    <>
    <Navbar/>
<VirtualBanner/>    
    <VirtualContent/>
    <BusinessCreateAccount/>
    <Footer/>
    
    </>
  )



}


function WhiteLabelSolutionComponent(){

  return(
<>

<Navbar/>
<WhiteLabelBanner/>
<WhiteLabelContent/>
<BusinessCreateAccount/>
<Footer/>




</>


  )


}



function Payment(){
  document.title="PaymentGateway | Kuberpays"
  return(
<>
<Navbar/>
<PaymentGatewayHero/>
<PaymentGatewayInfo/>
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
            <Route path="/developers" element={<DevelopersComponent />} />

        <Route path="/payment-gateway" element={<Payment />} />
        <Route path="/about" element={<AboutUsComponent/>}/>
        <Route path="/invoices" element={<InvoiceComponent/>}/>
        <Route path="/virtual-account" element={<VirtualAccountComponent/>}/>
        <Route path="/white-label" element={<WhiteLabelSolutionComponent/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
