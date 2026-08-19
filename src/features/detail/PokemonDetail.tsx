import { Suspense } from 'react';

import { useParams } from 'react-router';

import PokemonDetailContent from './PokemonDetailContent';

const PokemonDetail = () => {
  const { pokemonId } = useParams();

  return (
    <Suspense
      fallback={<div className="text-3xl text-center m-auto">Loading...</div>}
    >
      <PokemonDetailContent pokemonId={pokemonId} />
    </Suspense>
  );
};

export default PokemonDetail;
