import { useState } from 'react';

import { FavoritePokemonsContext } from './FavoritePokemonsContext';
import type { PokemonEntity } from '@/features/home/domain/entities/PokemonEntity';

interface Props {
  children: React.ReactNode;
}

const FavoritePokemonsProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<PokemonEntity[]>([]);

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
