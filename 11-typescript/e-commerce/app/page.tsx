"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { ProductGrid } from "@/components/product/ProductGrid";
import { CartSidebar } from "@/components/cart/CartSidebar";
import { products } from "@/lib/data/products";
import type { Product } from "@/lib/data/products";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Props drilling example - this callback gets passed down through ProductGrid -> ProductCard
  const handleProductAddToCart = (product: Product) => {
    console.log(`Added ${product.name} to cart!`);
    // You could show a toast notification here, or perform other actions
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        title="TypeScript Store"
        onCartClick={() => setIsCartOpen(true)}
      />

      <main className="container mx-auto px-4 py-8">
        <ProductGrid
          products={products}
          title="Featured Products"
          onProductAddToCart={handleProductAddToCart}
        />
      </main>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
