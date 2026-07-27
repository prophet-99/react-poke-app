export interface PokemonResponse {
  count: number;
  next: string;
  previous: null;
  results: PokemonResponseResult[];
}

export interface PokemonResponseResult {
  name: string;
  url: string;
}
