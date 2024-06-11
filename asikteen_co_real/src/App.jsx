import HomePage from "./pages/HomePage";
import HomePageNot from "./pages/HomePageNot"
import FooterComponent from "./component/FooterComponent";
import {Routes, Route} from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import SigninPage from "./pages/Signin/SigninPage";
import CartPage from "./pages/CartPage";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import YourOrder from "./pages/YourOrder";
import DetailPage from "./pages/DetailPage";
import DetailProduct from "./pages/DetailProduct";
import TransactionPage from "./pages/TransactionPage";
import DetailPageWrapper from "./component/DetailPageWrapper";
import ProductListPage from "./component/ProductListPage";
import BankList from "./component/BankList";
import AdminDashboardPage from "./Admin/AdminDashboardPage";
import KelolaPesanan from "./Admin/KelolaPesanan";
import KategoriPage from "./Admin/KategoriPage";
import DaftarProduk from "./Admin/DaftarProduk";
import KelolaPembayaran from "./Admin/KelolaPembayaran"
import DaftarPelanggan from "./Admin/DaftarPelanggan"
import DaftarStaff from "./Admin/DaftarStaff"




function App() {
  return <div>
    
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/HomePageNot" element={<HomePageNot />} />
    <Route path="/LoginPage" element={<LoginPage />} />
    <Route path="/SigninPage" element={<SigninPage />} />
    <Route path="/CartPage" element={<CartPage />} />
    <Route path="/MenPage" element={<MenPage />} />
    <Route path="/WomenPage" element={<WomenPage />} />
    <Route path="/YourOrder" element={<YourOrder />} />
    <Route path="/WomenPage" element={<HomePage />} />
    <Route path="/DetailPage" element={<DetailPage />} />
    <Route path="/DetailProduct" element={<DetailProduct />} />
    <Route path="/TransactionPage" element={<TransactionPage />} />
    <Route path="/" component={BankList} />
    <Route path="/product/:id" component={DetailPage} />
    <Route path="/" component={ProductListPage} />
    <Route path="/AdminDashboardPage" element={<AdminDashboardPage />} />
    <Route path="/KelolaPesanan" element={<KelolaPesanan />} />
    <Route path="/KategoriPage" element={<KategoriPage />} />
    <Route path="/KelolaPembayaran" element={<KelolaPembayaran />} />
    <Route path="/DaftarProduk" element={<DaftarProduk />} />
    <Route path="/DaftarPelanggan" element={<DaftarPelanggan />} />
    <Route path="/DaftarStaff" element={<DaftarStaff />} />
    </Routes>


    <FooterComponent /> 
  </div>
}

export default App
