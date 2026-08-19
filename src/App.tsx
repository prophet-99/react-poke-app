import './App.css';

import { Navigate, Route, Routes } from 'react-router';

import MainLayout from '@/core/layouts/MainLayout';
import AppFloatButton from '@/core/components/AppFloatButton';
import FavoritePokemonsProvider from '@/core/context/FavoritePokemonsProvider';
import PokemonGrid from '@/features/home/PokemonGrid';
import PokemonFavorites from '@/features/favorites/PokemonFavoritesGrid';
import PokemonDetail from '@/features/detail/PokemonDetail';

function App() {
  return (
    <MainLayout>
      <FavoritePokemonsProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/pokemons" replace />} />
          <Route path="/pokemons" element={<PokemonGrid />} />
          <Route path="/pokemons/:pokemonId" element={<PokemonDetail />} />
          <Route path="/favorites" element={<PokemonFavorites />} />
        </Routes>

        <AppFloatButton />
      </FavoritePokemonsProvider>
    </MainLayout>
  );
}

export default App;
