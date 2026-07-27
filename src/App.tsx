import './App.css';

import { Route, Routes } from 'react-router';

import MainLayout from '@/core/layouts/MainLayout';
import AppFloatButton from '@/core/components/AppFloatButton';
import FavoritePokemonsProvider from '@/core/context/FavoritePokemonsProvider';
import PokemonGrid from '@/features/home/PokemonGrid';
import PokemonFavorites from '@/features/favorites/PokemonFavoritesGrid';

function App() {
  return (
    <MainLayout>
      <FavoritePokemonsProvider>
        <Routes>
          <Route path="/" element={<PokemonGrid />} />
          <Route path="/favorites" element={<PokemonFavorites />} />
        </Routes>

        <AppFloatButton />
      </FavoritePokemonsProvider>
    </MainLayout>
  );
}

export default App;
