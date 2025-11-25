import { Routes, Route, useLocation } from "react-router-dom";
import VendorForm from "./Vendor";
import Franchise from "./Franchise";
import Carosual from "./Carosual"; 
import Product from "./Product";
import Cakes from "./Cakes";
import Card from "./Card";
import PhotoCakes from "./PhotoCakes";
import PinataCakes from "./PinataCakes";
import PullMeUpCakes from "./PullMeUpCakes";
import KidsCakes from "./KidsCakes";
import NextPage from "./NextPage";
import ContainerOne from "./ContainerOne";
import BestSeller from "./BestSeller";
export default function MainLayout() {
  const location = useLocation();

  return (
    <>
  
      {location.pathname === "/" &&
        <>
          <Carosual />
          <Product />
          <ContainerOne/>
          <Card/>
          <BestSeller/>
        </>
      }

      <Routes>
        <Route path="/vendor" element={<VendorForm />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/carousel" element={<Carosual />} /> 
        <Route path="/product" element={<Product/>}/>
        <Route path="/cakes" element={<Cakes/>}/>
        <Route path="/photo-cakes" element={<PhotoCakes />} />
        <Route path="/pinata-cakes" element={<PinataCakes />} />
        <Route path="/pull-me-up-cakes" element={<PullMeUpCakes />} />
        <Route path="/kids-cakes" element={<KidsCakes />} /> 
        <Route path="/next-page" element={<NextPage/>}/>
      </Routes>
    </>
  );
}
