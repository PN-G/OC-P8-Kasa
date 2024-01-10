import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import CardContainer from "../components/CardContainer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = `Kasa - Accueil`;
  }, []);

  return (
    <div>
      <Navigation />
      <Banner
        imgUrl={"banner-home.png"}
        headline={"Chez vous, partout et ailleurs"}
      />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default Home;
