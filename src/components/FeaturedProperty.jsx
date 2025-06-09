import React from "react";
import { ArrowRight } from "lucide-react";
import PropertyCard from "./PropertyCard"; // Ensure default export is used in PropertyCard.jsx
import { properties } from "../data/properties";
import { useState } from "react";
const FeaturedProperty = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProperties =
    activeCategory === "all"
      ? properties
      : properties.filter((property) => property.category === activeCategory);
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="container-custom">
          {/* Heading and CTA */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Featured Properties
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Explore our handpicked selection of featured properties. These
                represent the best in comfort, value, and potential.
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <a
                href="#"
                className="group inline-flex items-center text-coral-500 font-medium hover:text-coral-600 transition-colors"
              >
                <span>View all properties</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {["all", "house", "apartment", "villa", "office"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-coral-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              )
            )}
          </div>

          {/* Properties Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProperty;
