import { Star } from 'lucide-react';

interface ProductRatingProps {
  rating: number;
  showText?: boolean;
}

export function ProductRating({ rating, showText = false }: ProductRatingProps) {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(rating)
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-gray-300'
          }`}
        />
      ))}
      {showText && (
        <span className="text-sm text-muted-foreground">({rating})</span>
      )}
    </div>
  );
}