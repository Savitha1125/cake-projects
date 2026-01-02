import { Routes, Route, useLocation } from "react-router-dom";
import { useCart } from "./CartContext";
import VendorForm from "./Vendor";
import Franchise from "./Franchise";
import Header from "./Header";
import Carosual from "./Carosual"; 
import Product from "./Product";
import Cakes from "./Cakes";
import CakeDetail from "./CakeDetail";
import Card from "./Card";
import PhotoCakes from "./PhotoCakes";
import PinataCakes from "./PinataCakes";
import PullMeUpCakes from "./PullMeUpCakes";
import KidsCakes from "./KidsCakes";
import NextPage from "./NextPage";
import ContainerOne from "./ContainerOne";
import BestSeller from "./BestSeller";
import Flower from "./Flower";
import TextPage from "./Text-page";
import Footer from "./Footer";
import Help from "./Help";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Login from "./Login";
import Checkout from "./Checkout";
import OrderReview from "./Order-review";

export default function MainLayout() {
  const location = useLocation();
  const { cartItems } = useCart();
  const isCartPage = location.pathname === "/cart";
  const isCheckoutPage = location.pathname === "/checkout";
  const isreviewPage = location.pathname === "/order-review";

  const showHeader =
  (!isCartPage || cartItems.length === 0) && !isCheckoutPage && !isreviewPage;

  return (
    <>
      {/* Header */}
      {showHeader && <Header />}

      {/* Homepage components */}
      {location.pathname === "/" && (
        <>
          <Carosual />
          <Product />
          <ContainerOne />
          <Card />
          <BestSeller />
          <Flower />
          <TextPage />
          <Footer/>
          <Help/>
        </>
      )}

      {/* All Routes */}
      <Routes>
        <Route path="/" element={null} /> {/* Homepage components already rendered above */}
        <Route path="/vendor" element={<VendorForm />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/carousel" element={<Carosual />} /> 
        <Route path="/product" element={<Product />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/cake/:key" element={<CakeDetail />} />
        <Route path="/photo-cakes" element={<PhotoCakes />} />
        <Route path="/pinata-cakes" element={<PinataCakes />} />
        <Route path="/pull-me-up-cakes" element={<PullMeUpCakes />} />
        <Route path="/kids-cakes" element={<KidsCakes />} /> 
        <Route path="/next-page" element={<NextPage />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/order-review" element={<OrderReview/>} />
      </Routes>
    </>
  );
}
