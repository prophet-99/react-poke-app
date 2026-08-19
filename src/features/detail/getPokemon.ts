// TODO: Refactor this, change domain entity to correct LAYER / + API CONSTANTS
import type { PokemonDetailResponse } from '@/features/home/data/models/pokemonDetailResponse';

const pokemonPromises = new Map<string, Promise<PokemonDetailResponse>>();

export const getPokemon = (pokemonId: string) => {
  const cachedPromise = pokemonPromises.get(pokemonId);
  if (cachedPromise) return cachedPromise;

  const newPromise = fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  ).then(async (response) => {
    if (!response.ok)
      throw new Error(`Failed to fetch pokemon with id ${pokemonId}`);

    return (await response.json()) as PokemonDetailResponse;
  });
  pokemonPromises.set(pokemonId, newPromise);

  return newPromise;
};
