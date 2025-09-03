import AboutPage from "./About";
import ContactPage from "./Contact";
import ProjectsPage from "./Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Expertise />
      <ClientsSection />
      <CVHero />
      <BannerImage />
      <ContactSection />
      <Footer />
      <ScrollToTopBtn />
    </>
  );
}