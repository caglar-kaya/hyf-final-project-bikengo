import React from "react";
import HomeBikeCardWrapper from "../components/homeBikeCardWrapper/HomeBikeCardWrapper";
import PageWrapper from "../components/pageWrapper/PageWrapper";
import HomeInfoCardWrapper from "../components/homeInfoCardWrapper/HomeInfoCardWrapper";
import HomeMapContainer from "../components/homeMapContainer/HomeMapContainer";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <PageWrapper>
        <HomeInfoCardWrapper />
        <HomeBikeCardWrapper />
        <HomeMapContainer />
      </PageWrapper>
    </>
  );
};

export default Home;
