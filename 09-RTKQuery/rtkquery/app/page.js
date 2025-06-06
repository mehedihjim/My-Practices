"use client";

import { useGetProductsQuery } from "@/redux/productApi";
import { motion } from "motion/react";

export function Component({ isVisible }) {
  return <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />;
}

export default function Home() {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Failed to load products 😢</p>;

  return (
    <main style={{ padding: "2rem" }}>
      <motion.div
        whileHover={{
          y: -100,
          rotate: [-5, 5, -5, 5, 0],
        }}
        transition={{ duration: 1 }}
        style={{ fontSize: "3rem", display: "inline-block" }}
      >
        <h1 className="text-white">🛍 Product List</h1>
      </motion.div>
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
