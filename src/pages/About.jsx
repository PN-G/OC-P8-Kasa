import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import data from "../data/about.json";

const About = () => {
  return (
    <div>
      <Navigation />
      <Banner imgUrl={"banner-about.png"} headline={""}/>
      <main className="about-main">
        {data.map((about, index) => (
          <Dropdown key={index} dropdownInfo={about} />
        ))}
      </main>
      <Footer />
    </div>
  );
  
};

export default About;
