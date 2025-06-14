'use client';

import { Pet } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, Calendar, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PetCardProps {
  pet: Pet;
  isFavorited: boolean;
  onToggleFavorite: (petId: string) => void;
  onViewDetails: (pet: Pet) => void;
}

export default function PetCard({ pet, isFavorited, onToggleFavorite, onViewDetails }: PetCardProps) {
  const getSpeciesIcon = (species: string) => {
    const icons = {
      dog: '🐕',
      cat: '🐱',
      rabbit: '🐰',
      bird: '🐦'
    };
    return icons[species as keyof typeof icons] || '🐾';
  };

  const getSizeColor = (size: string) => {
    const colors = {
      small: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      large: 'bg-blue-100 text-blue-800'
    };
    return colors[size as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white border-gray-200">
      <div className="relative overflow-hidden">
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            className={cn(
              "p-2 rounded-full transition-all duration-200",
              isFavorited 
                ? "bg-red-500 text-white hover:bg-red-600" 
                : "bg-white/80 text-gray-600 hover:bg-white hover:text-red-500"
            )}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(pet.id);
            }}
          >
            <Heart className={cn("w-4 h-4", isFavorited && "fill-current")} />
          </Button>
        </div>
        <div className="absolute top-3 left-3">
          <Badge className={getSizeColor(pet.size)} variant="secondary">
            {pet.size}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span className="text-2xl">{getSpeciesIcon(pet.species)}</span>
            {pet.name}
          </CardTitle>
          <span className="text-sm text-gray-500 capitalize">{pet.gender}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="font-medium">{pet.breed}</span>
          <span>•</span>
          <span>{pet.age} {pet.age === 1 ? 'year' : 'years'} old</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-gray-600 text-sm line-clamp-2">{pet.description}</p>
        
        <div className="flex flex-wrap gap-1">
          {pet.personality.slice(0, 3).map((trait, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {trait}
            </Badge>
          ))}
          {pet.personality.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{pet.personality.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span className="truncate">{pet.shelter}</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            <span className="font-medium">${pet.adoptionFee}</span>
          </div>
        </div>

        <div className="flex gap-2 text-xs">
          {pet.isVaccinated && (
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Vaccinated
            </Badge>
          )}
          {pet.isSpayedNeutered && (
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Spayed/Neutered
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-3">
        <Button 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-colors"
          onClick={() => onViewDetails(pet)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}