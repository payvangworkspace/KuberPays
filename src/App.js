import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import ContactSection from "./Components/ContactSection";
import InnovationSection from "./Components/InnovationSection";
import EnterpriseSuite from "./Components/EnterpriseSuite";
import IndustriesSection from "./Components/IndustriesSection";
import AnimatedStats from "./Components/AnimatedStats";
import PaymentGatewayInfo from "./Components/PaymentGatewayInfo";
import PaymentGatewayHero from "./Components/PaymentGatewayHero";
import IntegrationSection from "./Components/IntegrationSection";
import AboutUsBanner from "./Components/AboutUsBanner";
import AboutUs from "./Components/AboutUs";
import { InvoiceBanner } from "./Components/InvoiceBanner";
import InvoicingContent from "./Components/InvoiceContent";
import BusinessCreateAccount from "./Components/BusinessCreateAccount";
import { VirtualBanner } from "./Components/VirtualBanner";
import VirtualContent from "./Components/VirtualContent";
import { WhiteLabelBanner } from "./Components/WhiteLabelBanner";
import WhiteLabelContent from "./Components/WhiteLabelContent";
import CommonBanner from "./Components/CommonBanner";
import CardSlider from "./Components/CardSlider";
import Pricing from "./Components/Pricing";
import TermsAndConditions from "./Components/TermsAndConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";

import FAQsSection from "./Components/FAQsSection";
import ContactForm from "./Components/ContactForm";
import SignUp from "./Components/SignUp";

// ========== Individual Route Components ==========

function Home() {
  document.title = "Home | Kuberpays";
  return (
    <>
      <Navbar />
      <Hero />
      <ContactSection />
      <InnovationSection />
      <EnterpriseSuite />
      <IndustriesSection />
      <AnimatedStats />
      <Footer />
    </>
  );
}



function SignupComponent(){
      document.title = "Signup | Kuberpays";
    return (
<>
<Navbar/>
<SignUp/>
<BusinessCreateAccount/>
<Footer/>



</>


    )
}

function DevelopersComponent() {
      document.title = "Devoper Integration | Kuberpays";
  return (
    <>
      <Navbar />
      <CommonBanner title="Integrations for Developers" imageUrl="./pexels-divinetechygirl.jpg" />
      <IntegrationSection />
      <Footer />
    </>
  );
}

function PricingComponent() {
      document.title = "Pricing | Kuberpays";
  return (
    <>
      <Navbar />
      <CommonBanner title="Pricing" imageUrl="./Pricing.jpg" />
      <Pricing />
      <BusinessCreateAccount />
      <Footer />
    </>
  );
}

function TandC() {
      document.title = "Terms & Conditions | Kuberpays";
  return (
    <>
      <Navbar />
      <CommonBanner title="Terms & Conditions" imageUrl="./terms.jpg" />
      <TermsAndConditions />
      <BusinessCreateAccount />
      <Footer />
    </>
  );
}

function Privacy() {
      document.title = "Privacy Policy | Kuberpays";
  return (
    <>
      <Navbar />
      <CommonBanner title="Privacy Policy" imageUrl="./privacy.jpg" />
      <PrivacyPolicy />
      <BusinessCreateAccount />
      <Footer />
    </>
  );
}

function AboutUsComponent() {
      document.title = "About Us | Kuberpays";
  return (
    <>
      <Navbar />
      <AboutUsBanner />
      <AboutUs />
      <BusinessCreateAccount />
      <Footer />
    </>
  );
}

function InvoiceComponent() {
      document.title = "Invoice | Kuberpays";
  return (
    <>
      <Navbar />
      <InvoiceBanner />
      <InvoicingContent />
      <BusinessCreateAccount />
      <Footer />
    </>
  );
}

function ContactUs() {

  document.title = "Contact Us | Kuberpays";
  return (
    <>
      <Navbar />
      <CommonBanner title="Contact Us" imageUrl="./contact-us-bg.jpg" />
      <ContactSection />
      <ContactForm/>
      <BusinessCreateAccount />
      <Footer />
    </>
  );
}

function VirtualAccountComponent() {
      document.title = "Virtual Account | Kuberpays";
  return (
    <>
      <Navbar />
      <VirtualBanner />
      <VirtualContent />
      <BusinessCreateAccount />
      <Footer />
    </>
  );
}

function FeatureComponent() {
      document.title = "Features | Kuberpays";
  return (
    <>
      <Navbar />
      <CommonBanner title="Features" imageUrl="./common1.jpg" />
      <CardSlider />
      <BusinessCreateAccount />
      <Footer />
    </>
  );
}

function WhiteLabelSolutionComponent() {
      document.title = "White Label | Kuberpays";
  return (
    <>
      <Navbar />
      <WhiteLabelBanner />
      <WhiteLabelContent />
      <BusinessCreateAccount />
      <Footer />
    </>
  );
}

function Payment() {
     
  document.title = "Payment Gateway | Kuberpays";
  return (
    <>
      <Navbar />
      <PaymentGatewayHero />
      <PaymentGatewayInfo />
      <Footer />
    </>
  );
}

function FAQsComponent() {
      document.title = "FAQs | Kuberpays";
  return (
    <>
      <Navbar />
      <CommonBanner title="FAQs" imageUrl="./banner3.jpg" />
      <FAQsSection />
      <BusinessCreateAccount />
      <Footer />
    </>
  );
}

// ========== App Component ==========

function App() {
  return (
    <div>
      <BrowserRouter basename="KuberPays">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developers" element={<DevelopersComponent />} />
          <Route path="/payment-gateway" element={<Payment />} />
          <Route path="/about" element={<AboutUsComponent />} />
          <Route path="/invoices" element={<InvoiceComponent />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/virtual-account" element={<VirtualAccountComponent />} />
          <Route path="/white-label" element={<WhiteLabelSolutionComponent />} />
          <Route path="/features" element={<FeatureComponent />} />
          <Route path="/faqs" element={<FAQsComponent />} />
          <Route path="/pricing" element={<PricingComponent />} />
          <Route path="/terms" element={<TandC />} />
          <Route path="/privacy-policy" element={<Privacy />} />

          <Route path="/signup" element={<SignupComponent />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
