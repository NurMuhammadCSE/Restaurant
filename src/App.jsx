import About from "./components/Home/About/About";
import Banner from "./components/Home/Banner/Banner";
import PopularFood from "./components/Home/PopularFood/PopularFood";
import Reserve from "./components/Home/Reserve/Reserve";
import Testimonial from "./components/Home/Testimonial/Testimonial";
import Navbar from "./components/Shared/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <PopularFood></PopularFood>
      <Reserve></Reserve>
      <Testimonial></Testimonial>
    </div>
  );
};

export default App;