import { FavoritePokemonsContext } from './FavoritePokemonsContext';

export const FavoritePokemonsProvider = ({ children }) => {
  return (
    <FavoritePokemonsContext.Provider value={null}>
      {children}
    </FavoritePokemonsContext.Provider>
  );
};

export default FavoritePokemonsProvider;
