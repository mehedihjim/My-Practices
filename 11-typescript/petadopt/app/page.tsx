'use client';

import { useState, useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { toggleFavorite, setFilter, setSearchTerm, clearFilters } from '@/lib/features/petsSlice';
import { Pet } from '@/lib/types';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PetFilters from '@/components/PetFilters';
import PetCard from '@/components/PetCard';
import PetModal from '@/components/PetModal';

export default function Home() {
  const dispatch = useAppDispatch();
  const { pets, favorites, filters, searchTerm } = useAppSelector((state) => state.pets);
  
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [showingFavorites, setShowingFavorites] = useState(false);

  // Filter and search logic
  const filteredPets = useMemo(() => {
    let filtered = pets;

    // Show only favorites if toggled
    if (showingFavorites) {
      filtered = filtered.filter(pet => favorites.includes(pet.id));
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(pet =>
        pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.personality.some(trait => trait.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply species filter
    if (filters.species) {
      filtered = filtered.filter(pet => pet.species === filters.species);
    }

    // Apply size filter
    if (filters.size) {
      filtered = filtered.filter(pet => pet.size === filters.size);
    }

    // Apply age filter
    if (filters.age) {
      filtered = filtered.filter(pet => {
        switch (filters.age) {
          case 'young':
            return pet.age <= 2;
          case 'adult':
            return pet.age >= 3 && pet.age <= 7;
          case 'senior':
            return pet.age >= 8;
          default:
            return true;
        }
      });
    }

    return filtered;
  }, [pets, favorites, filters, searchTerm, showingFavorites]);

  // Props drilling functions
  const handleToggleFavorite = (petId: string) => {
    dispatch(toggleFavorite(petId));
  };

  const handleViewDetails = (pet: Pet) => {
    setSelectedPet(pet);
  };

  const handleFilterChange = (key: string, value: string) => {
    dispatch(setFilter({ key: key as keyof typeof filters, value }));
  };

  const handleSearchChange = (value: string) => {
    dispatch(setSearchTerm(value));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  const handleShowFavorites = () => {
    setShowingFavorites(!showingFavorites);
    if (!showingFavorites) {
      // Clear filters when showing favorites
      dispatch(clearFilters());
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        favoritesCount={favorites.length}
        onShowFavorites={handleShowFavorites}
        showingFavorites={showingFavorites}
      />
      
      {!showingFavorites && <Hero />}
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Page Title */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {showingFavorites ? 'Your Favorite Pets' : 'Available Pets'}
            </h2>
            <p className="text-gray-600">
              {showingFavorites 
                ? `You have ${favorites.length} favorite${favorites.length !== 1 ? 's' : ''}`
                : `${filteredPets.length} adorable pets waiting for their forever homes`
              }
            </p>
          </div>

          {/* Filters */}
          {!showingFavorites && (
            <PetFilters
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
            />
          )}

          {/* Empty states */}
          {filteredPets.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">
                {showingFavorites ? '💔' : '🔍'}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {showingFavorites ? 'No favorites yet' : 'No pets found'}
              </h3>
              <p className="text-gray-500 mb-6">
                {showingFavorites 
                  ? 'Start browsing pets and add some to your favorites!'
                  : 'Try adjusting your search criteria or filters.'
                }
              </p>
              {showingFavorites && (
                <button
                  onClick={() => setShowingFavorites(false)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Browse All Pets
                </button>
              )}
            </div>
          )}

          {/* Pets Grid */}
          {filteredPets.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPets.map((pet) => (
                <PetCard
                  key={pet.id}
                  pet={pet}
                  isFavorited={favorites.includes(pet.id)}
                  onToggleFavorite={handleToggleFavorite}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Pet Details Modal */}
      <PetModal
        pet={selectedPet}
        isOpen={!!selectedPet}
        onClose={() => setSelectedPet(null)}
        isFavorited={selectedPet ? favorites.includes(selectedPet.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}