import { createContext } from 'react';

import type { PokemonEntity } from '@/features/home/domain/entities/PokemonEntity';

export interface FavoritePokemonsContextValue {
  favorites: PokemonEntity[];
  toggleFavorites: (favorite: PokemonEntity) => void;
}

export const FavoritePokemonsContext =
  createContext<FavoritePokemonsContextValue | null>(null);
