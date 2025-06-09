import React, { useState } from "react";
import { Bed, Bath, Square, MapPin, Heart } from "lucide-react";

const PropertyCard = ({ property }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="card group overflow-hidden shadow-md rounded-lg bg-white">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              property.status === "For Sale"
                ? "bg-green-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {property.status}
          </span>
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`absolute top-4 right-4 h-9 w-9 rounded-full flex items-center justify-center transition-colors ${
            isFavorite
              ? "bg-coral-500 text-white"
              : "bg-white/80 text-gray-700 hover:bg-white"
          }`}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="h-4 w-4 mr-1 text-coral-500" />
          <span>{property.location}</span>
        </div>

        <h3 className="text-lg font-semibold text-navy-900 mb-3 hover:text-coral-500 transition-colors">
          <a href="#">{property.title}</a>
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between py-3 border-t border-gray-100">
          <div className="flex items-center text-gray-700">
            <Bed className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.beds} Beds</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Bath className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.baths} Baths</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Square className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.sqft} Sq Ft</span>
          </div>
        </div>

        {/* Price & Link */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-xl font-bold text-navy-900">
              ${property.price.toLocaleString()}
            </span>
            {property.status === "For Rent" && (
              <span className="text-gray-600 text-sm">/month</span>
            )}
          </div>
          <a
            href="#"
            className="text-sm font-medium text-coral-500 hover:text-coral-600 transition-colors"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
