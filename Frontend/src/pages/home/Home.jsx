import Navbar from "../../components/navbar";
import Banner from "./Banner";
import News from "./News";
import Recomended from "./Recomended";
import TopSellers from "./TopSellers";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopSellers />
      <Recomended />
      <News />
    </div>
  );
};

export default Home;
