import React from "react";
import { DollarSign, Home, Key, ArrowRight } from "lucide-react";

export const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            See How Realton Can Help
          </h2>
          <p className="text-gray-600">
            We provide comprehensive real estate services tailored to your
            specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Buy a property */}
          <div className="bg-white rounded-xl p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="relative inline-block mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-coral-50">
                <Home className="h-8 w-8 text-coral-500" />
              </div>
              <div className="absolute -top-1 -right-1 w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center text-white">
                <DollarSign className="h-4 w-4" />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-navy-900 mb-3">
              Buy a property
            </h3>
            <p className="text-gray-600 mb-6">
              Find your place with an immersive photo experience and the most
              listings, including things you won't find anywhere else.
            </p>

            <a
              href="#"
              className="group inline-flex items-center text-coral-500 font-medium hover:text-coral-600 transition-colors"
            >
              <span>Find a home</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Sell a property */}
          <div className="bg-white rounded-xl p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="relative inline-block mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-coral-50">
                <Home className="h-8 w-8 text-coral-500" />
              </div>
              <div className="absolute -top-1 -right-1 w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center text-white">
                <DollarSign className="h-4 w-4" />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-navy-900 mb-3">
              Sell a property
            </h3>
            <p className="text-gray-600 mb-6">
              No matter what path you take to sell your home, we can help you
              navigate a successful sale and find your next place.
            </p>

            <a
              href="#"
              className="group inline-flex items-center bg-coral-500 text-white px-5 py-2.5 rounded-lg hover:bg-coral-600 transition-colors"
            >
              <span>Place an ad</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Rent a property */}
          <div className="bg-white rounded-xl p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="relative inline-block mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-coral-50">
                <Home className="h-8 w-8 text-coral-500" />
              </div>
              <div className="absolute -top-1 -right-1 w-8 h-8 bg-coral-500 rounded-full flex items-center justify-center text-white">
                <Key className="h-4 w-4" />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-navy-900 mb-3">
              Rent a property
            </h3>
            <p className="text-gray-600 mb-6">
              Whether you're looking for a single-family home, high-rise
              apartment, or something in between, we've got rental listings.
            </p>

            <a
              href="#"
              className="group inline-flex items-center text-coral-500 font-medium hover:text-coral-600 transition-colors"
            >
              <span>Find a rental</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
