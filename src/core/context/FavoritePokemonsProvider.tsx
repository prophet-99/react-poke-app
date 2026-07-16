import { useState } from 'react';

import { FavoritePokemonsContext } from './FavoritePokemonsContext';
import type { PokemonEntity } from '@/features/pokemons/domain/entities/PokemonEntity';

export const FavoritePokemonsProvider = ({ children }) => {
  const [favorites, setFavorites] = useState<PokemonEntity[]>([]);

  const toggleFavorites = (pokemon: PokemonEntity) => {
    const foundPokemon = favorites.find((f) => f.id === pokemon.id);
    const pokemons = foundPokemon
      ? favorites.filter((f) => f.id !== pokemon.id)
      : [...favorites, pokemon];

    setFavorites(pokemons);
  };

  return (
    <FavoritePokemonsContext.Provider value={{ favorites, toggleFavorites }}>
      {children}
    </FavoritePokemonsContext.Provider>
  );
};

export default FavoritePokemonsProvider;
