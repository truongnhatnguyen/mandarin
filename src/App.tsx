import { Outlet, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";
import "./App.css";
import { Providers } from "./Providers";
import { Footer } from "./layouts/Footer";
import { Header } from "./layouts/Header";
import { BuyPresalePage } from "./pages/BuyPresale";
import { HomePage } from "./pages/Home";
import { PrivacyPage } from "./pages/Privacy";
import { TermPage } from "./pages/Term";

function App() {
 return (
  <Providers>
   {/* <RouterProvider router={router} /> */}
   <Routes>
    <Route
     path="/"
     element={
      <>
       <Header />
       <Outlet />
       <Footer />
      </>
     }
    >
     <Route index element={<HomePage />} />
     <Route path="presale" element={<BuyPresalePage />} />
     <Route path="term" element={<TermPage />} />
     <Route path="privacy" element={<PrivacyPage />} />
    </Route>
   </Routes>
   <ToastContainer />
  </Providers>
 );
}

export default App;
