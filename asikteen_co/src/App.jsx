import NavbarComponent from "./component/NavbarComponent";
import Banner from "./component/Banner";
import {Features} from "./component/Banner";
import {DeliverySection} from "./component/Banner";
import {Categories} from "./component/Banner";
import {Collection} from "./component/Banner";
import ProductGrid from "./data/ProductGrid";
import FooterComponent from "./component/FooterComponent";
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FaqPage from "./pages/FaqPage";



function App() {
  return <div>
    <NavbarComponent />
    <Banner />
    <Features/>
    <DeliverySection />
    <Categories/>
    <Collection/>
    <ProductGrid/>
    
    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/faq" Component={FaqPage}/>
    </Routes>


    <FooterComponent /> 
  </div>
}

export default App
