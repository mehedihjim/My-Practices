"use client";

import { useAppSelector } from "@/lib/hooks"; // Adjust path as needed
import Image from "next/image";

export default function CheckoutPage() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const total = useAppSelector((state) => state.cart.total);
  const itemCount = useAppSelector((state) => state.cart.itemCount);

  // Dynamically calculated fields
  const shipping = total > 100 ? 0 : 5;
  const discount = 0; // Placeholder if you want to add promo codes later
  const grandTotal = total + shipping - discount;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Cart Items */}
      <div className="space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border p-4 rounded-xl shadow-sm"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">
                  Quantity: {item.quantity}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">${item.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {/* Summary */}
      {cartItems.length > 0 && (
        <div className="mt-10 p-6 bg-gray-100 rounded-xl max-w-md ml-auto space-y-2">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between">
            <span>Items ({itemCount})</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}
