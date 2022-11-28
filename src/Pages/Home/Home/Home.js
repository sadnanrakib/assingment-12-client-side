import React from "react";
import AllButton from "../../AllButton/AllButton";
import Testmonial from "../../Testmonial/Testmonial";
import Banner from "../Banner/Banner";

import ExtraSection from "../ExtraSection/ExtraSection";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <AllButton></AllButton>
      <ExtraSection></ExtraSection>
      
      <Testmonial></Testmonial>
    </div>
  );
};

export default Home;
