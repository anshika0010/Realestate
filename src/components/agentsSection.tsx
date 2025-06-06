"use client";
import React from "react";
import { Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const agents = [
  {
    id: 1,
    name: "David Anderson",
    role: "Residential Specialist",
    image:
      "https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=256",
    properties: 45,
    email: "david@realton.com",
    phone: "+1 (234) 567-8901",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Jessica Martinez",
    role: "Commercial Expert",
    image:
      "https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?auto=compress&cs=tinysrgb&w=256",
    properties: 38,
    email: "jessica@realton.com",
    phone: "+1 (234) 567-8902",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Robert Thompson",
    role: "Luxury Properties",
    image:
      "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=256",
    properties: 52,
    email: "robert@realton.com",
    phone: "+1 (234) 567-8903",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "Sophia Williams",
    role: "Investment Advisor",
    image:
      "https://images.pexels.com/photos/3777570/pexels-photo-3777570.jpeg?auto=compress&cs=tinysrgb&w=256",
    properties: 41,
    email: "sophia@realton.com",
    phone: "+1 (234) 567-8904",
    social: {
      instagram: "#",
      facebook: "#",
      twitter: "#",
    },
  },
];

export const AgentsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Meet Our Expert Agents
          </h2>
          <p className="text-gray-600">
            Our team of experienced agents is here to help you find the perfect
            property that meets all your requirements.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent) => (
            <div key={agent.id} className="card group overflow-hidden">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform">
                    <div className="flex items-center mb-3">
                      <Phone className="h-4 w-4 text-white mr-2" />
                      <span className="text-white text-sm">{agent.phone}</span>
                    </div>

                    <div className="flex items-center mb-3">
                      <Mail className="h-4 w-4 text-white mr-2" />
                      <span className="text-white text-sm">{agent.email}</span>
                    </div>

                    <div className="flex space-x-3 mt-4">
                      <a
                        href={agent.social.instagram}
                        className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-coral-500 transition-colors"
                      >
                        <Instagram className="h-4 w-4" />
                      </a>
                      <a
                        href={agent.social.facebook}
                        className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-coral-500 transition-colors"
                      >
                        <Facebook className="h-4 w-4" />
                      </a>
                      <a
                        href={agent.social.twitter}
                        className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-coral-500 transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-navy-900 mb-1">
                  {agent.name}
                </h3>
                <p className="text-gray-600 mb-3">{agent.role}</p>
                <p className="text-sm text-gray-500">
                  {agent.properties} Properties
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn btn-outline">
            View All Agents
          </a>
        </div>
      </div>
    </section>
  );
};
