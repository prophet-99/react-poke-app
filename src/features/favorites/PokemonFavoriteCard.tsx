import type { PokemonEntity } from '@/features/home/domain/entities/PokemonEntity';
import { POKEMON_TYPES } from '@/core/symbols/constants';

interface Props {
  pokemon: PokemonEntity;
}

const PokemonFavoriteCard = ({ pokemon }: Props) => {
  const primaryType = POKEMON_TYPES.find(
    ({ name }) => name === pokemon.types[0]
  );

  return (
    <section
      className={`gap-4 group flex aspect-square flex-col rounded-[1.75rem] px-5 pt-10 pb-5 text-white shadow-sm transition-transform duration-200 hover:-translate-y-1 ${primaryType?.background ?? 'bg-slate-400'}`}
    >
      <article className="pointer-events-none flex min-h-0 flex-1 items-center justify-center -space-x-8 w-full h-64">
        <img
          className="h-full object-contain opacity-80 drop-shadow-md"
          src={pokemon.sprites.showdownBack}
          alt={`${pokemon.name} animado de espalda`}
        />
        <img
          className="h-full object-contain drop-shadow-lg transition-transform duration-200 group-hover:scale-110"
          src={pokemon.sprites.showdownFront}
          alt={`${pokemon.name} animado de frente`}
        />
      </article>

      <article className="shrink-0">
        <p className="text-sm font-medium tracking-[0.2em] text-white/70">
          #{String(pokemon.id).padStart(3, '0')}
        </p>
        <h2 className="mt-1 text-2xl font-semibold capitalize">
          {pokemon.name}
        </h2>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {pokemon.types.map((type) => (
            <li
              key={type}
              className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium capitalize backdrop-blur-sm"
            >
              {type}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default PokemonFavoriteCard;
