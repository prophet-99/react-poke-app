import { use } from 'react';

import { Link } from 'react-router';
import { ArrowLeft, Heart } from 'lucide-react';

import { getPokemon } from './getPokemon';

interface Props {
  pokemonId?: string;
}

const details = [
  ['Especie', 'Pokémon Semilla'],
  ['Altura', `2'4" (0.70 m)`],
  ['Peso', '15.2 lbs (6.9 kg)'],
  ['Habilidades', 'Overgrow, Chlorophyll'],
];

const breeding = [
  ['Género', '♂ 87.5% ♀ 12.5%'],
  ['Grupos huevo', 'Monster, Plant'],
  ['Ciclo huevo', '20'],
];
// const primaryType = POKEMON_TYPES.find(
//   ({ name }) => name === pokemon.types[0]
// )

const PokemonDetailContent = ({ pokemonId }: Props) => {
  const pokemon = use(getPokemon(pokemonId));

  return (
    <section
      className="relative w-full overflow-hidden md:grid md:min-h-150 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] rounded-t-3xl md:rounded-3xl md:shadow-[0_10px_24px_-12px_oklch(40%_.05_260/0.35)]"
      style={{
        backgroundColor: '#78C850',
      }}
    >
      <article className="relative px-5 pb-8 pt-6 md:sticky md:top-8 md:self-start md:px-8 md:pb-12">
        <div className="mb-4 flex items-center justify-between">
          <Link to="/">
            <ArrowLeft className="rounded-full size-8 text-card/90 transition-colors hover:bg-white/20" />
          </Link>
          <button
            type="button"
            aria-label="Marcar como favorito"
            className="cursor-pointer rounded-full p-1 text-card/90 transition-colors hover:bg-white/20"
          >
            <Heart className="h-6 w-6" />
          </button>
        </div>

        <div className="flex items-start justify-between gap-3">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-card md:text-4xl">
            {pokemon.name}
          </h1>

          <span className="font-display text-lg font-extrabold text-card/90">
            #001
          </span>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/25 px-3 py-1 text-xs font-bold text-card">
            Planta
          </span>
          <span className="rounded-full bg-white/25 px-3 py-1 text-xs font-bold text-card">
            Veneno
          </span>
        </div>

        <div className="relative mt-4 flex justify-center">
          <div className="absolute h-44 w-44 rounded-full bg-white/15 md:h-60 md:w-60" />

          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
            alt="Bulbasaur"
            className="relative h-48 w-48 object-contain drop-shadow-xl md:h-64 md:w-64"
            draggable={false}
          />
        </div>
      </article>

      <article className="relative -mt-6 min-h-[60vh] rounded-t-3xl bg-card px-5 pb-10 pt-6 md:mt-0 md:min-h-0 md:rounded-none md:px-8 md:py-10">
        <nav className="mb-5 flex flex-wrap gap-5 border-b border-border">
          <button
            type="button"
            className="-mb-px border-b-2 border-current pb-2 text-sm font-bold text-foreground transition-colors"
          >
            Información
          </button>
          <button
            type="button"
            className="-mb-px border-b-2 border-transparent pb-2 text-sm font-bold text-muted-foreground transition-colors"
          >
            Estadísticas
          </button>
          <button
            type="button"
            className="-mb-px border-b-2 border-transparent pb-2 text-sm font-bold text-muted-foreground transition-colors"
          >
            Evolución
          </button>
          <button
            type="button"
            className="-mb-px border-b-2 border-transparent pb-2 text-sm font-bold text-muted-foreground transition-colors"
          >
            Movimientos
          </button>
        </nav>

        <div>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Una rara semilla le fue plantada en el lomo al nacer. La planta
            brota y crece con este Pokémon.
          </p>

          {details.map(([label, value]) => (
            <div
              key={label}
              className="grid grid-cols-[110px_1fr] gap-3 py-1.5 text-sm"
            >
              <span className="font-semibold text-muted-foreground">
                {label}
              </span>
              <span className="font-semibold text-foreground">{value}</span>
            </div>
          ))}

          <h3 className="mb-1 mt-5 font-display text-base font-extrabold text-foreground">
            Crianza
          </h3>

          {breeding.map(([label, value]) => (
            <div
              key={label}
              className="grid grid-cols-[110px_1fr] gap-3 py-1.5 text-sm"
            >
              <span className="font-semibold text-muted-foreground">
                {label}
              </span>
              <span className="font-semibold text-foreground">{value}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default PokemonDetailContent;
