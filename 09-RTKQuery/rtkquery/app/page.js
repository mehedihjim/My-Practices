// app/page.js
"use client";

import { useGetProductsQuery } from "@/redux/productApi";

export default function Home() {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Failed to load products 😢</p>;

  return (
    <main style={{ padding: "2rem" }}>
      <h1>🛍 Product List</h1>
      <ul>
        {data.products.map((product) => (
          <li key={product.id}>
            <strong>{product.title}</strong> – ${product.price}
          </li>
        ))}
      </ul>
    </main>
  );
}
