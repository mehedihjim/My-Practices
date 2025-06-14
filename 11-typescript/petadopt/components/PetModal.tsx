"use client";

import { Pet } from "@/lib/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Calendar, DollarSign, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface PetModalProps {
  pet: Pet | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorited: boolean;
  onToggleFavorite: (petId: string) => void;
}

export default function PetModal({
  pet,
  isOpen,
  onClose,
  isFavorited,
  onToggleFavorite,
}: PetModalProps) {
  if (!pet) return null;

  const getSpeciesIcon = (species: string) => {
    const icons = {
      dog: "🐕",
      cat: "🐱",
      rabbit: "🐰",
      bird: "🐦",
    };
    return icons[species as keyof typeof icons] || "🐾";
  };

  const getSizeColor = (size: string) => {
    const colors = {
      small: "bg-green-100 text-green-800",
      medium: "bg-yellow-100 text-yellow-800",
      large: "bg-blue-100 text-blue-800",
    };
    return colors[size as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const getAgeGroup = (age: number) => {
    if (age <= 2) return "Young";
    if (age <= 7) return "Adult";
    return "Senior";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <span className="text-3xl">{getSpeciesIcon(pet.species)}</span>
            {pet.name}
            <Button
              variant="secondary"
              size="sm"
              className={cn(
                "ml-auto p-2 rounded-full transition-all duration-200",
                isFavorited
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500"
              )}
              onClick={() => onToggleFavorite(pet.id)}
            >
              <Heart className={cn("w-4 h-4", isFavorited && "fill-current")} />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={pet.image}
              alt={pet.name}
              className="w-full h-80 object-cover"
            />
            <div className="absolute top-4 left-4">
              <Badge className={getSizeColor(pet.size)} variant="secondary">
                {pet.size}
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">Breed</p>
              <p className="text-lg">{pet.breed}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">Age</p>
              <p className="text-lg">
                {pet.age} {pet.age === 1 ? "year" : "years"} (
                {getAgeGroup(pet.age)})
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">Gender</p>
              <p className="text-lg capitalize">{pet.gender}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">Size</p>
              <p className="text-lg capitalize">{pet.size}</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">
              About {pet.name}
            </p>
            <p className="text-gray-700 leading-relaxed">{pet.description}</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">
              Personality Traits
            </p>
            <div className="flex flex-wrap gap-2">
              {pet.personality.map((trait, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {trait}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              {pet.isVaccinated ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-sm">Vaccinated</span>
            </div>
            <div className="flex items-center gap-2">
              {pet.isSpayedNeutered ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-sm">Spayed/Neutered</span>
            </div>
          </div>

          <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium">Shelter</span>
              </div>
              <span className="text-sm">{pet.shelter}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium">Available Since</span>
              </div>
              <span className="text-sm">
                {new Date(pet.dateAdded).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium">Adoption Fee</span>
              </div>
              <span className="text-lg font-bold text-orange-600">
                ${pet.adoptionFee}
              </span>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
              Contact Shelter
            </Button>
            <Button variant="outline" className="flex-1">
              Schedule Visit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
