
import './App.css';
import Contact from './Components/Contact';
import ContactSection from './Components/ContactSection';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import InnovationSection from './Components/InnovationSection';
import EnterpriseSuite from './Components/EnterpriseSuite';
import IndustriesSection from './Components/IndustriesSection';
import AnimatedStats from './Components/AnimatedStats';

import DevelopersSection from './Components/DevelopersSection';


import PaymentGatewayInfo from './Components/PaymentGatewayInfo';
import PaymentGatewayHero from './Components/PaymentGatewayHero';
import IntegrationSection from './Components/IntegrationSection';
import AboutUsBanner from './Components/AboutUsBanner';
import AboutUs from './Components/AboutUs';
import { InvoiceBanner } from './Components/InvoiceBanner';
import InvoicingContent from './Components/InvoiceContent';

import BusinessCreateAccount from './Components/BusinessCreateAccount';
import { VirtualBanner } from './Components/VirtualBanner';
import VirtualContent from './Components/VirtualContent';
import { WhiteLabelBanner } from './Components/WhiteLabelBanner';
import WhiteLabelContent from './Components/WhiteLabelContent';
// <<<<<<< Nitesh
// import CommonBanner from './Components/CommonBanner';
// import CardSlider from './Components/CardSlider';
// =======
// import Pricing from './Components/Pricing';
// >>>>>>> feature

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

function Pricingcomponent(){
  return(
    <>
  <Navbar/>
  <Pricing/>
  </>
  )
}


function AboutUsComponent(){
  return (
<>
<Navbar/>
<AboutUsBanner/>
<AboutUs/>
<BusinessCreateAccount/>
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



function ContactUs(){
  document.title="ContactUs | Kuberpays"
  return(
    <>
   <Navbar/>
   <ContactSection/>
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

function FeatureComponent(){
  return (
<>
<Navbar/>
<CommonBanner title="Features" imageUrl="./common1.jpg"  />
<CardSlider/>

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


function FAQsComponent(){
  return(
<>

<Navbar/>
<CommonBanner title="FAQS"  imageUrl="./features.jpg"/>



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
// <<<<<<< Nitesh
//         <Route path="/contact" element={<ContactUs/>}/>
//         <Route path="/virtual-account" element={<VirtualAccountComponent/>}/>
//         <Route path="/white-label" element={<WhiteLabelSolutionComponent/>}/>
//                 <Route path="/features" element={<FeatureComponent/>}/>
//                                 <Route path="/faqs" element={<FAQsComponent/>}/>
// =======

//         <Route path="/contact" element={<ContactUs/>}/>

//         <Route path="/virtual-account" element={<VirtualAccountComponent/>}/>
//         <Route path="/white-label" element={<WhiteLabelSolutionComponent/>}/>
//         <Route path="/pricing" element={<Pricingcomponent/>}/>

// >>>>>>> feature
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
