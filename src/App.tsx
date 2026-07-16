import './App.css';

import MainLayout from '@/core/layouts/MainLayout';
import AppFloatButton from '@/core/components/AppFloatButton';
import PokemonGrid from '@/features/pokemons/PokemonGrid';
import FavoritePokemonsProvider from '@/core/context/FavoritePokemonsProvider';

function App() {
  return (
    <MainLayout>
      <FavoritePokemonsProvider>
        <PokemonGrid />

        <AppFloatButton />
      </FavoritePokemonsProvider>
    </MainLayout>
  );
}

export default App;
