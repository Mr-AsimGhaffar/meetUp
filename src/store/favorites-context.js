import { createContext, useState } from "react";

const FavoritesContext = createContext({});

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  function addFavoritesHandler(favoriteMeetup) {
    setUserFavorites(userFavorites.concat(favoriteMeetup));
  }
  function removeFavoritesHandler() {}
  function itemIsFavoritesHandler() {}
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
