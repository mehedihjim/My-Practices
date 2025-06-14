'use client';

import { Heart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  favoritesCount: number;
  onShowFavorites: () => void;
  showingFavorites: boolean;
}

export default function Header({ favoritesCount, onShowFavorites, showingFavorites }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 p-2 rounded-lg">
              <Heart className="w-6 h-6 text-white fill-current" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">PetAdopt</h1>
              <p className="text-sm text-gray-500">Find your perfect companion</p>
            </div>
          </div>

          <nav className="flex items-center gap-4">
            <Button
              variant={showingFavorites ? "default" : "outline"}
              onClick={onShowFavorites}
              className="relative"
            >
              <Heart className={`w-4 h-4 mr-2 ${showingFavorites ? 'fill-current' : ''}`} />
              Favorites
              {favoritesCount > 0 && (
                <Badge 
                  variant="secondary" 
                  className="ml-2 bg-red-500 text-white px-1.5 py-0.5 text-xs"
                >
                  {favoritesCount}
                </Badge>
              )}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}