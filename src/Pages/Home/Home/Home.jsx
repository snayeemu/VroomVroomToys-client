import Gallery from "../Gallery/Gallery";
import Banner from "../Banner/Banner";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import ReviewSection from "../../ReviewSection/ReviewSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default Home;
