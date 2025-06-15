export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: number;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299.99,
    image:
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "High-quality wireless headphones with noise cancellation",
    category: "Electronics",
    rating: 4.5,
    inStock: true,
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 199.99,
    image:
      "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Track your fitness goals with this advanced smartwatch",
    category: "Electronics",
    rating: 4.3,
    inStock: true,
  },
  {
    id: "3",
    name: "Professional Camera",
    price: 899.99,
    image:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Capture stunning photos with this professional camera",
    category: "Electronics",
    rating: 4.8,
    inStock: true,
  },
  {
    id: "4",
    name: "Fancy Home Chair",
    price: 449.99,
    image:
      "https://images.pexels.com/photos/7881483/pexels-photo-7881483.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Comfortable ergonomic chair for long work sessions",
    category: "Furniture",
    rating: 4.2,
    inStock: true,
  },
  {
    id: "5",
    name: "Modern Desk Lamp",
    price: 79.99,
    image:
      "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Sleek LED desk lamp with adjustable brightness",
    category: "Furniture",
    rating: 4.1,
    inStock: false,
  },
  {
    id: "6",
    name: "Wireless Speaker",
    price: 149.99,
    image:
      "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Portable wireless speaker with premium sound quality",
    category: "Electronics",
    rating: 4.4,
    inStock: true,
  },
  {
    id: "7",
    name: "Coffee Beans",
    price: 79.99,
    image:
      "https://images.pexels.com/photos/4829069/pexels-photo-4829069.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Comfortable ergonomic chair for long work sessions",
    category: "Food",
    rating: 4.2,
    inStock: true,
  },
  {
    id: "8",
    name: "Latest Camera Lens",
    price: 399.99,
    image:
      "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Sleek LED desk lamp with adjustable brightness",
    category: "Electronics",
    rating: 4.1,
    inStock: true,
  },
  {
    id: "9",
    name: "Wireless Speaker",
    price: 149.99,
    image:
      "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Mic & Headphone Combo",
    category: "Electronics",
    rating: 3.2,
    inStock: false,
  },
];
