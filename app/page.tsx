import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import CertificationsSection from '../components/CertificationsSection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <Testimonials />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}