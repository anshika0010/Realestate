"use client";
import React from "react";
import { Home, ArrowRight, MapPin } from "lucide-react";

export const CtaSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-navy-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Ready to Find Your Dream Home?
              </h2>
              <p className="text-gray-600 mb-8">
                Let's start the journey to finding your perfect property. Our
                expert agents are ready to help you every step of the way.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <a href="#" className="btn btn-primary">
                  <Home className="h-4 w-4 mr-2" />
                  Browse Properties
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center text-coral-500 font-medium hover:text-coral-600 transition-colors"
                >
                  <span>Contact an Agent</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-navy-900 mb-6">
                Request a Property Tour
              </h3>

              <form>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-all"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="property-location"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="property-location"
                      className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-all"
                      placeholder="City, neighborhood, or address"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-coral-500 focus:border-coral-500 outline-none transition-all"
                    placeholder="Tell us about your property requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Schedule a Tour
                </button>
              </form>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 h-20 w-20 bg-coral-500 rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -left-4 h-20 w-20 bg-navy-900 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
