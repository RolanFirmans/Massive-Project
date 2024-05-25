import HomePage from "./pages/HomePage";
import FooterComponent from "./component/FooterComponent";
import {Routes, Route} from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import SigninPage from "./pages/Signin/SigninPage";
import CartPage from "./pages/CartPage";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import YourOrder from "./pages/YourOrder";




function App() {
  return <div>
    
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/LoginPage" element={<LoginPage />} />
    <Route path="/SigninPage" element={<SigninPage />} />
    <Route path="/CartPage" element={<CartPage />} />
    <Route path="/MenPage" element={<MenPage />} />
    <Route path="/WomenPage" element={<WomenPage />} />
    <Route path="/YourOrder" element={<YourOrder />} />
    <Route path="/WomenPage" element={<HomePage />} />
    </Routes>


    <FooterComponent /> 
  </div>
}

export default App
