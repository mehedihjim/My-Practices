"use client";

import { useGetProductsQuery } from "@/redux/productApi";

export default function Home() {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Failed to load products 😢</p>;

  return (
    <main style={{ padding: "2rem" }}>
      <h1>🛍 Product List</h1>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Title</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Rating</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Avaibality
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((product) => (
            <tr key={product.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {product.title}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                ⭐ {product.rating}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {product.availabilityStatus}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                ${product.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
