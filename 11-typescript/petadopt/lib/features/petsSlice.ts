import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pet, PetsState } from '../types';

const mockPets: Pet[] = [
  {
    id: '1',
    name: 'Luna',
    species: 'dog',
    breed: 'Golden Retriever',
    age: 3,
    gender: 'female',
    size: 'large',
    description: 'Luna is a gentle, loving dog who adores children and other pets. She\'s house-trained and knows basic commands.',
    personality: ['Friendly', 'Gentle', 'Playful', 'Loyal'],
    isVaccinated: true,
    isSpayedNeutered: true,
    adoptionFee: 250,
    image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=500',
    shelter: 'Happy Paws Rescue',
    dateAdded: '2024-01-15'
  },
  {
    id: '2',
    name: 'Whiskers',
    species: 'cat',
    breed: 'Maine Coon',
    age: 2,
    gender: 'male',
    size: 'large',
    description: 'Whiskers is a majestic Maine Coon with a calm demeanor. He loves to be brushed and enjoys quiet companionship.',
    personality: ['Calm', 'Independent', 'Affectionate', 'Quiet'],
    isVaccinated: true,
    isSpayedNeutered: true,
    adoptionFee: 180,
    image: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=500',
    shelter: 'Feline Friends Sanctuary',
    dateAdded: '2024-01-20'
  },
  {
    id: '3',
    name: 'Buddy',
    species: 'dog',
    breed: 'Labrador Mix',
    age: 1,
    gender: 'male',
    size: 'medium',
    description: 'Buddy is an energetic puppy who loves to play fetch and go on adventures. Perfect for an active family!',
    personality: ['Energetic', 'Playful', 'Smart', 'Social'],
    isVaccinated: true,
    isSpayedNeutered: false,
    adoptionFee: 200,
    image: 'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=500',
    shelter: 'City Animal Shelter',
    dateAdded: '2024-01-18'
  },
  {
    id: '4',
    name: 'Princess',
    species: 'cat',
    breed: 'Persian',
    age: 4,
    gender: 'female',
    size: 'medium',
    description: 'Princess is a beautiful Persian cat who enjoys lounging in sunny spots. She\'s looking for a quiet, loving home.',
    personality: ['Calm', 'Elegant', 'Quiet', 'Loving'],
    isVaccinated: true,
    isSpayedNeutered: true,
    adoptionFee: 220,
    image: 'https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=500',
    shelter: 'Precious Pets Rescue',
    dateAdded: '2024-01-10'
  },
  {
    id: '5',
    name: 'Max',
    species: 'dog',
    breed: 'German Shepherd',
    age: 5,
    gender: 'male',
    size: 'large',
    description: 'Max is a loyal and intelligent German Shepherd. He\'s great with kids and would make an excellent family guardian.',
    personality: ['Loyal', 'Intelligent', 'Protective', 'Trainable'],
    isVaccinated: true,
    isSpayedNeutered: true,
    adoptionFee: 300,
    image: 'https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&w=500',
    shelter: 'Guardian Angels Pet Rescue',
    dateAdded: '2024-01-12'
  },
  {
    id: '6',
    name: 'Mittens',
    species: 'cat',
    breed: 'Tabby',
    age: 1,
    gender: 'female',
    size: 'small',
    description: 'Mittens is a playful kitten who loves toys and climbing. She\'s looking for a family who can keep up with her energy!',
    personality: ['Playful', 'Curious', 'Energetic', 'Social'],
    isVaccinated: true,
    isSpayedNeutered: false,
    adoptionFee: 120,
    image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=500',
    shelter: 'Kitten Kingdom',
    dateAdded: '2024-01-22'
  },
  {
    id: '7',
    name: 'Charlie',
    species: 'dog',
    breed: 'Beagle',
    age: 6,
    gender: 'male',
    size: 'medium',
    description: 'Charlie is a gentle senior dog who loves walks and belly rubs. He\'s perfect for someone looking for a calm companion.',
    personality: ['Gentle', 'Calm', 'Loving', 'Easy-going'],
    isVaccinated: true,
    isSpayedNeutered: true,
    adoptionFee: 150,
    image: 'https://images.pexels.com/photos/1616190/pexels-photo-1616190.jpeg?auto=compress&cs=tinysrgb&w=500',
    shelter: 'Senior Pets Sanctuary',
    dateAdded: '2024-01-08'
  },
  {
    id: '8',
    name: 'Coco',
    species: 'rabbit',
    breed: 'Holland Lop',
    age: 2,
    gender: 'female',
    size: 'small',
    description: 'Coco is an adorable Holland Lop rabbit who loves to hop around and eat fresh vegetables. She\'s litter trained!',
    personality: ['Gentle', 'Curious', 'Quiet', 'Social'],
    isVaccinated: true,
    isSpayedNeutered: true,
    adoptionFee: 80,
    image: 'https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=500',
    shelter: 'Small Friends Rescue',
    dateAdded: '2024-01-25'
  }
];

const initialState: PetsState = {
  pets: mockPets,
  favorites: [],
  filters: {
    species: '',
    size: '',
    age: '',
  },
  searchTerm: '',
};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const petId = action.payload;
      const index = state.favorites.indexOf(petId);
      if (index === -1) {
        state.favorites.push(petId);
      } else {
        state.favorites.splice(index, 1);
      }
    },
    setFilter: (state, action: PayloadAction<{ key: keyof PetsState['filters'], value: string }>) => {
      const { key, value } = action.payload;
      state.filters[key] = value;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    clearFilters: (state) => {
      state.filters = {
        species: '',
        size: '',
        age: '',
      };
      state.searchTerm = '';
    },
  },
});

export const { toggleFavorite, setFilter, setSearchTerm, clearFilters } = petsSlice.actions;
export default petsSlice.reducer;