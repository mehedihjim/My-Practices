export interface Pet {
  id: string;
  name: string;
  species: 'dog' | 'cat' | 'rabbit' | 'bird';
  breed: string;
  age: number;
  gender: 'male' | 'female';
  size: 'small' | 'medium' | 'large';
  description: string;
  personality: string[];
  isVaccinated: boolean;
  isSpayedNeutered: boolean;
  adoptionFee: number;
  image: string;
  shelter: string;
  dateAdded: string;
}

export interface PetsState {
  pets: Pet[];
  favorites: string[];
  filters: {
    species: string;
    size: string;
    age: string;
  };
  searchTerm: string;
}