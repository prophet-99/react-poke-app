import { useContext, useState } from 'react';

import { POKEMON_TYPES } from '@/core/symbols/constants';
import type { PokemonEntity } from './domain/entities/PokemonEntity';
import { FavoritePokemonsContext } from '@/core/context/FavoritePokemonsContext';

interface Props {
  pokemon: PokemonEntity;
}

const PokemonCard = ({ pokemon }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { toggleFavorites } = useContext(FavoritePokemonsContext);

  const handleFavorite = () => {
    toggleFavorites(pokemon);
    setIsFavorite((current) => !current);
  };
  const primaryType = POKEMON_TYPES.find(
    ({ name }) => name === pokemon.types[0]
  );

  return (
    <section
      className={`group/card transition-[scale] hover:scale-[1.03] cursor-pointer overflow-hidden h-50 rounded-lg shadow-md p-3 relative after:rounded-[50%] after:absolute after:block after:-bottom-5 after:-right-5 after:w-30 after:h-30 ${primaryType?.background ?? 'bg-white'} ${primaryType?.backgroundOverlay ?? 'after:bg-gray-100'}`}
    >
      <p className={`capitalize text-2xl font-semibold text-white`}>
        {pokemon.name}
      </p>
      <button
        type="button"
        aria-pressed={isFavorite}
        onClick={handleFavorite}
        className={`cursor-pointer absolute top-3 right-3 z-20 grid size-9 place-items-center rounded-full bg-linear-to-br from-slate-950 via-slate-800 to-slate-600 shadow-md transition duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${isFavorite ? 'text-amber-300' : 'text-white'}`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-5"
          fill={isFavorite ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m12 3 2.78 5.63 6.22.9-4.5 4.39 1.06 6.2L12 17.2l-5.56 2.92 1.06-6.2L3 9.53l6.22-.9L12 3Z" />
        </svg>
      </button>
      <ul className="mt-2 flex flex-col gap-2 max-w-25">
        {pokemon.abilities.map((ability) => (
          <li
            key={ability.slot}
            className={`capitalize rounded-full px-2 py-0.5 text-xs font-medium ${primaryType?.chipBackground ?? 'bg-gray-100'} ${primaryType?.foreground ?? 'text-gray-600'}`}
          >
            {ability.ability.name}
          </li>
        ))}
      </ul>
      <img
        className="absolute bottom-0 right-0 w-32 pointer-events-none z-10 transition-[scale] group-hover/card:scale-[1.1]"
        src={pokemon.sprites.officialArtwork}
        alt={pokemon.name}
      />
    </section>
  );
};

export default PokemonCard;
