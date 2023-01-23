import AboutUsSection from "./Page/Homepage/AboutUsSection/AboutUsSection";
import ClientReviewSection from "./Page/Homepage/ClientReviewSection/ClientReviewSection";
import FooterSection from "./Page/Homepage/FooterSection/FooterSection";
import HeroSection from "./Page/Homepage/HeroSection/HeroSection";
import NavbarSection from "./Page/Homepage/NavbarSection/NavbarSection";
import OurProductSection from "./Page/Homepage/OurProductSection/OurProductSection";
import SubscribeSection from "./Page/Homepage/SubscribeSection/SubscribeSection";

function App() {
  return (
    <div>
      <NavbarSection></NavbarSection>
      <HeroSection></HeroSection>
      <OurProductSection></OurProductSection>
      <AboutUsSection></AboutUsSection>
      <ClientReviewSection></ClientReviewSection>
      <SubscribeSection></SubscribeSection>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
