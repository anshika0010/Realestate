"use client";
import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Buyer",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=256",
    quote:
      "Working with Realton to find our dream home was an incredible experience. Their attentive service and knowledge of the market made the process smooth and enjoyable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=256",
    quote:
      "As a property investor, I've worked with many agencies, but Realton stands out. Their market insights and investment property suggestions have consistently delivered excellent returns.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "First-time Seller",
    image:
      "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=256",
    quote:
      "Selling my first home was daunting, but the team at Realton guided me through every step. They secured a great price and made the process stress-free.",
    rating: 4,
  },
];

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="py-16 md:py-24 bg-navy-900 text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-300">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience with Realton.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative px-8 md:px-16">
            <div className="text-center">
              <div className="mb-8">
                <Quote className="h-12 w-12 text-coral-500 mx-auto" />
              </div>

              <p className="text-xl md:text-2xl italic mb-8">
                "{currentTestimonial.quote}"
              </p>

              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`h-5 w-5 ${
                      index < currentTestimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-400"
                    }`}
                  />
                ))}
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />
                <h4 className="text-lg font-semibold">
                  {currentTestimonial.name}
                </h4>
                <p className="text-gray-300">{currentTestimonial.role}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 mx-1 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-coral-500" : "w-2 bg-gray-500"
                }`}
                onClick={() => setActiveIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
