import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import data from "../data/about.json";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = `Kasa - A propos`;
    []
  });

  return (
    <div>
      <Navigation />
      <Banner imgUrl={"banner-about.png"} headline={""}/>
      <main className="about-main">
        {data.map((about, index) => (
          <Collapse key={index} collapseInfo={about} />
        ))}
      </main>
      <Footer />
    </div>
  );
  
};

export default About;
