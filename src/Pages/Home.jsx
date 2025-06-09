import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { ServicesSection } from "../components/ServicesSection";
// import { TestimonialsSection } from "../components/TestimonialsSection";
import { SellingOptionsSection } from "../components/SellingOption";
import { CtaSection } from "../components/CtaSection";
import Banner from "../components/Banner";
import { ExploreCitiesSection } from "../components/ExploreCitiesSection";
import AgentsSection from "../components/agentsSection";
import FeaturedProperty from "../components/FeaturedProperty";
import Foote from "../components/Foote";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesSection />

        <FeaturedProperty />
        <Banner />
        <ExploreCitiesSection />
        {/* <TestimonialsSection /> */}
        <SellingOptionsSection />

        <AgentsSection />
        <CtaSection />
      </main>
      <Foote />
    </>
  );
};

export default Home;
