import { useState } from "react";
import Navbar from "./components/Navbar";
import Slide from "./pages/Slide";
import Trips from "./pages/Trips";
import Services from "./pages/Services";
import Prices from "./pages/Prices";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);
  return (
    <>
      <div className=" min-h-[100vh]  bg-vintage bg-no-repeat bg-cover bg-bottom">
        <Navbar setIsOpenedMenu={setIsOpenedMenu} isOpenedMenu={isOpenedMenu} />
        <Slide isOpenedMenu={isOpenedMenu} />
      </div>
      <Trips />
      <Services />
      <Prices />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
