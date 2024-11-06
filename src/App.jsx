import About from "./components/Home/About/About";
import Banner from "./components/Home/Banner/Banner";
import PopularFood from "./components/Home/PopularFood/PopularFood";
import Navbar from "./components/Shared/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <PopularFood></PopularFood>
    </div>
  );
};

export default App;