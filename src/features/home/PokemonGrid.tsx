import { useEffect, useState } from 'react';

import PokemonCard from './PokemonCard';
import type { PokemonResponse } from './data/models/pokemonResponse';
import type { PokemonDetailResponse } from './data/models/pokemonDetailResponse';
import { adaptToPokemonEntity } from './data/adapters/adaptToPokemonEntity';
import type { PokemonEntity } from './domain/entities/PokemonEntity';
import useFetch from '@/core/hooks/useFetch';

const PokemonGrid = () => {
  const { data: pokemonResponse } = useFetch<PokemonResponse>(
    'https://pokeapi.co/api/v2/pokemon?limit=10'
  );
  const [pokemons, setPokemons] = useState<PokemonEntity[]>([]);

  useEffect(() => {
    if (!pokemonResponse?.results) return;

    async function request() {
      const pokemons = await Promise.all(
        pokemonResponse.results.map(async ({ url }) => {
          const rawPokemon = await fetch(url);
          const jsonPokemon =
            await (rawPokemon.json() as Promise<PokemonDetailResponse>);

          return adaptToPokemonEntity(jsonPokemon);
        })
      );

      setPokemons(pokemons);
    }

    void request();
  }, [pokemonResponse]);

  return (
    <>
      <h1 className="mb-6 font-bold text-4xl">Pokedex</h1>
      <article className="grid grid-cols-[repeat(auto-fill,minmax(17rem,1fr))] gap-4">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </article>
    </>
  );
};

export default PokemonGrid;
