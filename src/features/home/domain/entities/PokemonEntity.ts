export interface PokemonEntityAbility {
  ability: PokemonEntitySpecies;
  isHidden: boolean;
  slot: number;
}

export interface PokemonEntitySpecies {
  name: string;
  url: string;
}

export interface PokemonEntitySprites {
  showdownFront: string;
  showdownBack: string;
  officialArtwork: string;
}

export interface PokemonEntity {
  id: number;
  name: string;
  types: string[];
  abilities: PokemonEntityAbility[];
  sprites: PokemonEntitySprites;
}
