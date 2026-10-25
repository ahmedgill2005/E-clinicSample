import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrustStrip from './components/TrustStrip';
import AboutDoctor from './components/AboutDoctor';
import ExpertiseSection from './components/ExpertiseSection';
import ConsultationCards from './components/ConsultationCards';
import BookingSteps from './components/BookingSteps';
import ClinicLocation from './components/ClinicLocation';
import PatientReviews from './components/PatientReviews';
import FAQAccordion from './components/FAQAccordion';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-teal focus:px-5 focus:py-3 focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <HeroSection />
        <TrustStrip />
        <AboutDoctor />
        <ExpertiseSection />
        <ConsultationCards />
        <BookingSteps />
        <ClinicLocation />
        <PatientReviews />
        <FAQAccordion />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
