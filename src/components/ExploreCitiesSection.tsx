import React from "react";
import { MapPin, ArrowRight, Building2, Users, TrendingUp } from "lucide-react";

const cities = [
  {
    id: 1,
    name: "Ghaziabad",
    state: "Uttar Pradesh",
    image:
      "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800",
    properties: "2,500+",
    avgPrice: "₹45 Lakh",
    growth: "+12%",
    description: "Industrial hub with excellent connectivity to Delhi NCR",
    highlights: [
      "Metro Connectivity",
      "Industrial Growth",
      "Affordable Housing",
    ],
  },
  {
    id: 2,
    name: "Noida",
    state: "Uttar Pradesh",
    image:
      "https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg?auto=compress&cs=tinysrgb&w=800",
    properties: "4,200+",
    avgPrice: "₹75 Lakh",
    growth: "+18%",
    description: "Modern planned city with IT hubs and premium infrastructure",
    highlights: ["IT Hub", "Modern Infrastructure", "Educational Centers"],
  },
  {
    id: 3,
    name: "Greater Noida",
    state: "Uttar Pradesh",
    image:
      "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800",
    properties: "1,800+",
    avgPrice: "₹55 Lakh",
    growth: "+15%",
    description:
      "Emerging destination with world-class amenities and green spaces",
    highlights: ["Green City", "Sports Complex", "Educational Hub"],
  },
  {
    id: 4,
    name: "Delhi",
    state: "National Capital",
    image:
      "https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=800",
    properties: "8,500+",
    avgPrice: "₹1.2 Cr",
    growth: "+8%",
    description: "Capital city offering premium locations and heritage charm",
    highlights: ["Heritage Sites", "Business Center", "Cultural Hub"],
  },
];

export const ExploreCitiesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-navy-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Explore Prime Cities
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover the best real estate opportunities across Delhi NCR's most
            promising locations
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cities.map((city, index) => (
            <div
              key={city.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={city.image}
                  alt={`${city.name} cityscape`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Growth Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {city.growth}
                  </div>
                </div>

                {/* City Name Overlay */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{city.name}</h3>
                  <div className="flex items-center text-sm opacity-90">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{city.state}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {city.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center mb-1">
                      <Building2 className="h-4 w-4 text-coral-500 mr-1" />
                    </div>
                    <p className="text-xs text-gray-500 mb-1">Properties</p>
                    <p className="font-semibold text-navy-900">
                      {city.properties}
                    </p>
                  </div>

                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-4 w-4 text-coral-500 mr-1" />
                    </div>
                    <p className="text-xs text-gray-500 mb-1">Avg Price</p>
                    <p className="font-semibold text-navy-900">
                      {city.avgPrice}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {city.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-coral-50 text-coral-600 px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Explore Button */}
                <button className="w-full group/btn bg-navy-900 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:bg-coral-500 flex items-center justify-center">
                  <span>Explore {city.name}</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-coral-500 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View All Cities Button */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center bg-coral-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-coral-600 transition-all duration-300 hover:shadow-lg">
            <span>View All Cities</span>
            <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
