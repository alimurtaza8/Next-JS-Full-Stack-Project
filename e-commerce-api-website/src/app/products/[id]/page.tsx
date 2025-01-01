
import ProductDetails from "@/app/components/products/ProductDetails";


import { headers } from "next/headers";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const headersList = headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  
  const url = `${protocol}://${host}/api/products?id=${params.id}`;
  
  try {
    const response = await fetch(url);
    const product = await response.json();

    if (!product) {
      throw new Error('Product not found');
    }

    return <ProductDetails product={product} />;
  } catch (error) {
    console.error('Error fetching product:', error);
    return <div>Error loading product details</div>;
  }
}