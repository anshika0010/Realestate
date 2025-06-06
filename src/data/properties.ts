import { Property } from "../types/property";

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern Apartment with City View",
    description:
      "Luxurious apartment featuring panoramic city views, modern finishes, and state-of-the-art amenities in a prime downtown location.",
    price: 425000,
    image:
      "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Downtown, New York",
    status: "For Sale",
    category: "apartment",
    beds: 2,
    baths: 2,
    sqft: 1200,
    featured: true,
  },
  {
    id: 2,
    title: "Spacious Family House with Garden",
    description:
      "Beautiful family home with a large garden, modern kitchen, and spacious living areas in a quiet, family-friendly neighborhood.",
    price: 750000,
    image:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Brookside, Boston",
    status: "For Sale",
    category: "house",
    beds: 4,
    baths: 3,
    sqft: 2400,
    featured: true,
  },
  {
    id: 3,
    title: "Luxury Villa with Pool",
    description:
      "Stunning luxury villa with private pool, spacious entertainment areas, and premium finishes throughout in an exclusive gated community.",
    price: 1250000,
    image:
      "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Palm Beach, Miami",
    status: "For Sale",
    category: "villa",
    beds: 5,
    baths: 4.5,
    sqft: 3800,
    featured: true,
  },
  {
    id: 4,
    title: "Modern Office Space",
    description:
      "Contemporary office space with open floor plan, abundant natural light, and premium amenities in a prestigious business district.",
    price: 6500,
    image:
      "https://images.pexels.com/photos/1668928/pexels-photo-1668928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Financial District, Chicago",
    status: "For Rent",
    category: "office",
    beds: 0,
    baths: 2,
    sqft: 1800,
    featured: false,
  },
  {
    id: 5,
    title: "Cozy Studio Apartment",
    description:
      "Charming studio apartment with modern amenities, efficient layout, and great location close to transportation and entertainment.",
    price: 1200,
    image:
      "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "West Village, New York",
    status: "For Rent",
    category: "apartment",
    beds: 0,
    baths: 1,
    sqft: 550,
    featured: false,
  },
  {
    id: 6,
    title: "Waterfront Luxury Condo",
    description:
      "Exclusive waterfront condo offering breathtaking views, premium finishes, and resort-style amenities in a prestigious location.",
    price: 875000,
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Marina District, San Francisco",
    status: "For Sale",
    category: "apartment",
    beds: 3,
    baths: 2.5,
    sqft: 1850,
    featured: true,
  },
];
