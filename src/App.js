
import './App.css';
import ContactSection from './Components/ContactSection';
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
import CommonBanner from './Components/CommonBanner';
import CardSlider from './Components/CardSlider';
import Pricing from './Components/Pricing';
import TermsAndConditions from './Components/TermsAndConditions';
import PrivacyPolicy from './Components/PrivacyPolicy';


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
<Footer/>
</>
  )
}


function DevelopersComponent(){
  return (
<>
<Navbar/>
<IntegrationSection/>
<Footer/>
</>
  )
}

function Pricingcomponent(){
  return(
    <>
  <Navbar/>
  <CommonBanner title="Pricing"imageUrl="./Pricing.jpg"/>
  <Pricing/>
  <BusinessCreateAccount/>
  <Footer/>
  </>
  )
}

function TandC(){
  return(
    <>
   <Navbar/>
   <CommonBanner title="Terms & Conditions"imageUrl="./terms.jpg"/>
   <TermsAndConditions/>
   <BusinessCreateAccount/>
   <Footer/>
    </>
  )
}

function Privacy(){
  return(
    <>
    <Navbar/>
    <CommonBanner title="privacy policy"imageUrl="./privacy.jpg"/>
    <PrivacyPolicy/>
    <BusinessCreateAccount/>
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


function FAQsComponent(){
  return(
<>
<Navbar/>
<CommonBanner title="FAQS"  imageUrl="./features.jpg"/>
<BusinessCreateAccount/>
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

        <Route path="/contact" element={<ContactUs/>}/>
         <Route path="/virtual-account" element={<VirtualAccountComponent/>}/>
         <Route path="/white-label" element={<WhiteLabelSolutionComponent/>}/>
                 <Route path="/features" element={<FeatureComponent/>}/>
                                 <Route path="/faqs" element={<FAQsComponent/>}/> =====

         <Route path="/contact" element={<ContactUs/>}/>

        <Route path="/virtual-account" element={<VirtualAccountComponent/>}/>        <Route path="/white-label" element={<WhiteLabelSolutionComponent/>}/>
         <Route path="/pricing" element={<Pricingcomponent/>}/>
         <Route path="/terms" element={<TandC/>}/>
          <Route path="/privacy-policy" element={<Privacy/>}/>


       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
