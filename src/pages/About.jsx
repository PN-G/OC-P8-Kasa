import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";

const About = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <main className="about-main">
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </main>
      <Footer />
    </div>
  );
};

export default About;
