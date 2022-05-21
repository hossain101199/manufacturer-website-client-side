import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Reviews from "./Reviews";
import Tools from "./Tools";
import ViewGallery from "./ViewGallery";
import WhyChooseAitch from "./WhyChooseAitch";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <WhyChooseAitch></WhyChooseAitch>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <ViewGallery></ViewGallery>
    </div>
  );
};

export default Home;
