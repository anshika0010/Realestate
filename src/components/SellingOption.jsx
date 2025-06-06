import React from "react";
import { ArrowRight, Check } from "lucide-react";

export const SellingOptionsSection = () => {
  const agents = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=64",
      name: "David Anderson",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?auto=compress&cs=tinysrgb&w=64",
      name: "Jessica Martinez",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=64",
      name: "Robert Thompson",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/3777570/pexels-photo-3777570.jpeg?auto=compress&cs=tinysrgb&w=64",
      name: "Sophia Williams",
    },
  ];

  const features = [
    "Find excellent deals",
    "Friendly host & Fast support",
    "List your own property",
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Let's Find The Right{" "}
                <span className="text-gray-700">Selling Option For You</span>
              </h2>

              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                As the complexity of buildings to increase, the field of
                architecture.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-4">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <button className="group inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300">
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 relative">
            <div className="grid grid-cols-1 gap-6">
              {/* Modern House Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Modern luxury house"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Agents Badge */}
                <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-3">
                      {agents.map((agent, index) => (
                        <div key={agent.id} className="relative">
                          <img
                            src={agent.image}
                            alt={agent.name}
                            className="w-8 h-8 rounded-full border-2 border-white object-cover"
                          />
                        </div>
                      ))}
                      <div className="w-8 h-8 bg-gray-900 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">
                          +
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        10k+ Exclusive Agents
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Couple Image */}
              <div className="relative lg:absolute lg:top-8 lg:right-0 lg:w-80">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Happy couple with house model"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
