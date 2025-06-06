import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { ServicesSection } from "../components/ServicesSection";
import { FeaturedProperties } from "../components/FeaturedProperties";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { AgentsSection } from "../components/agentsSection";
import { CtaSection } from "../components/CtaSection";
import { Footer } from "../components/Footer";
import { SellingOptionsSection } from "../components/SellingOption";
import Banner from "../components/Banner";
import { ExploreCitiesSection } from "../components/ExploreCitiesSection";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesSection />

        <FeaturedProperties />
        <Banner />
        <ExploreCitiesSection />
        {/* <TestimonialsSection /> */}
        <SellingOptionsSection />

        <AgentsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
