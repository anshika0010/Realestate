"use client";
import React, { useState } from "react";
import { Search, MapPin, Home as HomeIcon, DollarSign } from "lucide-react";
import video from "../assets/video.mp4"; // Ensure the video exists in the correct path

export const Hero = () => {
  const [activeTab, setActiveTab] = useState("buy");

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 text-white overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔹 Overlay */}
      <div className="absolute  bg-black bg-opacity-60 z-0" />

      {/* 🔹 Main Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Find Your Perfect Place to Call Home
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Discover thousands of properties that match your preferences and
            budget
          </p>
        </div>

        {/* Search Box */}
        <div
          className="max-w-4xl mx-auto relative z-10 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b">
              {["buy", "rent", "sell"].map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                    activeTab === tab
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Search Form */}
            <div className="p-6">
              <form className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Location */}
                <div className="flex-1">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="location"
                      placeholder="City, neighborhood, or address"
                      className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Property Type */}
                <div className="flex-1">
                  <label
                    htmlFor="property-type"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Property Type
                  </label>
                  <div className="relative">
                    <HomeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      id="property-type"
                      className="w-full pl-10 pr-8 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none transition-all"
                    >
                      <option value="">Any Type</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="condo">Condo</option>
                      <option value="townhouse">Townhouse</option>
                    </select>
                  </div>
                </div>

                {/* Price Range */}
                <div className="flex-1">
                  <label
                    htmlFor="price-range"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Price Range
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      id="price-range"
                      className="w-full pl-10 pr-8 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none transition-all"
                    >
                      <option value="">Any Price</option>
                      <option value="0-100000">$0 - $100,000</option>
                      <option value="100000-250000">$100,000 - $250,000</option>
                      <option value="250000-500000">$250,000 - $500,000</option>
                      <option value="500000-750000">$500,000 - $750,000</option>
                      <option value="750000-1000000">
                        $750,000 - $1,000,000
                      </option>
                      <option value="1000000+">$1,000,000+</option>
                    </select>
                  </div>
                </div>

                {/* Search Button */}
                <div className="mt-2 md:mt-6">
                  <button
                    type="submit"
                    className="btn btn-primary px-8 py-2.5 w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                  >
                    <Search className="h-4 w-4 mr-2 inline-block" />
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Stats */}
        {/* <div
          className="container-custom mt-16 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "15k+", label: "Properties Listed" },
              { number: "10k+", label: "Happy Customers" },
              { number: "500+", label: "Expert Agents" },
              { number: "99%", label: "Customer Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold mb-1">
                  {stat.number}
                </p>
                <p className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};
