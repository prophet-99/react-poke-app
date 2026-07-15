import './App.css';

import MainLayout from '@/core/layouts/MainLayout';
import PokemonGrid from '@/features/pokemons/PokemonGrid';
import FavoritePokemonsProvider from '@/core/context/FavoritePokemonsProvider';

function App() {
  return (
    <MainLayout>
      <FavoritePokemonsProvider>
        <PokemonGrid />
      </FavoritePokemonsProvider>
    </MainLayout>
  );
}

export default App;
