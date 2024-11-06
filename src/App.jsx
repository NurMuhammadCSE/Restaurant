import About from "./components/Home/About/About";
import Banner from "./components/Home/Banner/Banner";
import Navbar from "./components/Shared/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
    </div>
  );
};

export default App;