import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegister from "../pages/loginRegister/LoginRegister";
import Nav from "../components/nav/Nav";
import Footer from "../pages/components/footer/Footer";
import DetailPage from "../pages/detail/DetailPage";
import Home from "../pages/Home/Home";
import Results from "../pages/results/ResultPage";
import CreateUser from "../pages/User/CreateUser";
import Ads from "../pages/ads/Ads";
import UserProfile from "../pages/userProfile/UserProfile";
import AboutUs from "../pages/AboutUs/AboutUs";
import TermsOfUse from "../pages/TermsOfUse/TermsOfUse";
import PrivacyPolicy from "../pages/privacyPolicy/PrivacyPolicy";
import ContactUs from "../pages/ContactUs/ContactUs";
import NotFound from "../pages/NotFound/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/results" element={<Results />} />
        <Route path="/results/:id" element={<DetailPage />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
