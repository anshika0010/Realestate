export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  location: string;
  status: "For Sale" | "For Rent";
  category: "house" | "apartment" | "villa" | "office";
  beds: number;
  baths: number;
  sqft: number;
  featured: boolean;
}
