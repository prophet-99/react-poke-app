import type { PokemonDetailResponse } from '@/features/pokemons/data/models/pokemonDetailResponse';
import type { PokemonEntity } from '@/features/pokemons/domain/entities/PokemonEntity';

const handleString = (value: string | null | undefined): string => value ?? '';

const adaptSprites = (
  sprites: PokemonDetailResponse['sprites'] | undefined
): PokemonEntity['sprites'] => ({
  showdownFront: handleString(sprites?.other?.showdown?.front_default),
  showdownBack: handleString(sprites?.other?.showdown?.back_default),
  officialArtwork: handleString(
    sprites?.other?.['official-artwork']?.front_default
  ),
});

export const adaptToPokemonEntity = (
  detail: PokemonDetailResponse
): PokemonEntity => ({
  id: detail.id,
  name: handleString(detail.name),
  types: detail.types.map(({ type }) => type.name),
  abilities: detail.abilities.map(({ ability, is_hidden, slot }) => ({
    ability: {
      name: handleString(ability?.name),
      url: handleString(ability?.url),
    },
    isHidden: is_hidden,
    slot,
  })),
  sprites: adaptSprites(detail.sprites),
});
