import AboutUsSection from "./Page/Homepage/AboutUsSection/AboutUsSection";
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
      <SubscribeSection></SubscribeSection>
    </div>
  );
}

export default App;
