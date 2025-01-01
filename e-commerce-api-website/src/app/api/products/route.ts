import { NextRequest, NextResponse } from 'next/server';

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  image: string;
  stock: number;
};

// Mock database
const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation",
    category: "Electronics",
    rating: 4,
    stock: 10,
    image: "/images/c-1.webp"
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 149.99,
    description: "Advanced fitness tracking with heart rate monitoring",
    category: "Wearables",
    rating: 5,
    stock: 5,
    image: "/images/c-4.jpg"
  },
  {
    id: 3,
    name: "T Shirt",
    price: 100.99,
    description: "High-quality Shirt",
    category: "Branded",
    rating: 6,
    stock: 9,
    image: "/images/c-2.png"
  },
  {
    id: 4,
    name: "Smart Fitness Ring Watch",
    price: 149.99,
    description: "Advanced fitness tracking with heart rate monitoring",
    category: "Wearables",
    rating: 5,
    stock: 3,
    image: "/images/c-6.webp"
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    const product = products.find(p => p.id === Number(id));
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json(product);
  }

  return NextResponse.json(products);
}