'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProductRating } from './ProductRating';
import { useAppDispatch } from '@/lib/hooks';
import { addItem } from '@/lib/features/cart/cartSlice';
import type { Product } from '@/lib/data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void; // Example of props drilling
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    // Redux action
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }));

    // Props drilling callback
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="destructive">Out of Stock</Badge>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
            <Badge variant="secondary" className="ml-2 shrink-0">
              {product.category}
            </Badge>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
          
          <ProductRating rating={product.rating} showText />
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">
          ${product.price.toFixed(2)}
        </div>
        
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="transition-all duration-200 hover:scale-105"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}