import Hero from "./components/Hero";
import OurStory from "./components/Story";
import Products from "./components/Products";
import WhyChoose from "./components/WhyChoose";
import RealIceCream from "./components/RealIceCream";
import Feedback from "./components/Feedback";


export default function Home() {
  return (
    <>
      <Hero />
      <OurStory /> 
      <Products />
      <WhyChoose />
      <RealIceCream />
      <Feedback />
    </>
  );
}
