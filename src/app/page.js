import Image from "next/image";
import HeroSection from "./Component/HeroSection";
import Navbar from "./Component/Navbar";
import Services from "./Component/Services";
import TeamSection from "./Component/TeamSection";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";


export default function Home() {
  return (
    <main >
      <Navbar/>
      <HeroSection/>
      <Services/>
      <TeamSection/>
      <Contact/>
      <Footer/>
      
      
    </main>
  );
}
