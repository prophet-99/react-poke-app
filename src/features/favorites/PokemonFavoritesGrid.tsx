import { useContext } from 'react';

import { ArrowLeft } from 'lucide-react';

import { FavoritePokemonsContext } from '@/core/context/FavoritePokemonsContext';
import PokemonFavoriteCard from './PokemonFavoriteCard';
import { useNavigate } from 'react-router';

const PokemonFavorites = () => {
  const { favorites } = useContext(FavoritePokemonsContext);
  const navigate = useNavigate();

  return (
    <>
      <article className="flex items-center gap-4 mb-6 ">
        <ArrowLeft
          className="size-8 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="font-bold text-4xl">Favorite Pokemons</h1>
      </article>

      <article className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4">
        {favorites.map((p) => (
          <PokemonFavoriteCard key={p.id} pokemon={p} />
        ))}
      </article>
    </>
  );
};

export default PokemonFavorites;
