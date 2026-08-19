import { useEffect, useState } from 'react';

import { KEY_STORAGE } from '@/core/symbols/constants/keyStorage';
import type { PokemonEntity } from '@/features/home/domain/entities/PokemonEntity';
import { FavoritePokemonsContext } from './FavoritePokemonsContext';

interface Props {
  children: React.ReactNode;
}

const FavoritePokemonsProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<PokemonEntity[]>(() => {
    const favoritesStorage = localStorage.getItem(
      KEY_STORAGE.POKEMON_FAVORITES
    );

    // TODO: Add ZOD Validate
    try {
      const favPokemons = JSON.parse(favoritesStorage) as PokemonEntity[];
      return favPokemons ?? [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      KEY_STORAGE.POKEMON_FAVORITES,
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const toggleFavorites = (favorite: PokemonEntity) => {
    const foundFavorite = favorites.find((f) => f.id === favorite.id);
    const newFavorites = foundFavorite
      ? favorites.filter((f) => f.id !== favorite.id)
      : [...favorites, favorite];

    setFavorites(newFavorites);
  };

  return (
    <FavoritePokemonsContext.Provider value={{ favorites, toggleFavorites }}>
      {children}
    </FavoritePokemonsContext.Provider>
  );
};

export default FavoritePokemonsProvider;
