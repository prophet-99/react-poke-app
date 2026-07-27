import { useContext } from 'react';

import { FavoritePokemonsContext } from '@/core/context/FavoritePokemonsContext';

const PokemonFavorites = () => {
  const { favorites } = useContext(FavoritePokemonsContext);

  return (
    <>
      <h1 className="mb-6 font-bold text-4xl">Favorite Pokemons</h1>
      <article className="grid grid-cols-[repeat(auto-fill,minmax(17rem,1fr))] gap-4">
        {favorites.map((f) => (
          <section className="overflow-hidden h-50 rounded-lg shadow-md p-3 relative after:rounded-[50%] after:absolute after:block after:-bottom-5 after:-right-5 after:w-30 after:h-30 bg-white after:bg-gray-100">
            {f.name}
          </section>
        ))}
      </article>
    </>
  );
};

export default PokemonFavorites;
