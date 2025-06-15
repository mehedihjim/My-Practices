"use client";

import { ShoppingCart, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAppSelector } from "@/lib/hooks";

interface HeaderProps {
  title: string;
  onCartClick: () => void;
}

export function Header({ title, onCartClick }: HeaderProps) {
  const itemCount = useAppSelector((state) => state.cart.itemCount);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Store className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">{title}</h1>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={onCartClick}
          className="relative flex items-center space-x-2"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Cart</span>
          {itemCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute flex justify-center items-center -right-2 -top-2 h-5 w-5 rounded-full p-0 text-xs"
            >
              {itemCount}
            </Badge>
          )}
        </Button>
      </div>
    </header>
  );
}
