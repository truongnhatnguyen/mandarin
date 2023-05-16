import { Outlet, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";
import "./App.css";
import { Footer } from "./layouts/Footer/Footer";
import { Header } from "./layouts/Header/Header";
import { BuyPresalePage } from "./pages/BuyPresale";
import { HomePage } from "./pages/Home";
import { PrivacyPage } from "./pages/Privacy";
import { TermPage } from "./pages/Term";
import { Providers } from "./Providers";

import { Page404 } from "./pages/404Page";
import { About } from "./pages/About";
import { ConnectWallet } from "./pages/ConnectWallet";
import { Contact } from "./pages/Contact";
import { Explore } from "./pages/Explore";
import { ExploreDetails } from "./pages/ExploreDetails";
import { HowItWorks } from "./pages/HowItWorks";
import "./sass/style.scss";

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
     <Route path="how-it-works" element={<HowItWorks />} />
     <Route path="contact" element={<Contact />} />
     <Route path="about" element={<About />} />
     <Route path="connect-wallet" element={<ConnectWallet />} />
     <Route path="explore-details/:id" element={<ExploreDetails />} />
     <Route path="explore" element={<Explore />} />
     <Route path="privacy" element={<PrivacyPage />} />
     <Route path="presale" element={<BuyPresalePage />} />
     <Route path="term" element={<TermPage />} />
     <Route path="404" element={<Page404 />} />
    </Route>
   </Routes>
   <ToastContainer position="bottom-center" hideProgressBar />
  </Providers>
 );
}

export default App;
