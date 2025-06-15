import { ProductCard } from './ProductCard';
import type { Product } from '@/lib/data/products';

interface ProductGridProps {
  products: Product[];
  title: string;
  onProductAddToCart: (product: Product) => void; // Props drilling example
}

export function ProductGrid({ products, title, onProductAddToCart }: ProductGridProps) {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">
          Discover our amazing collection of products
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onProductAddToCart} // Props drilling - passing callback down
          />
        ))}
      </div>
    </div>
  );
}