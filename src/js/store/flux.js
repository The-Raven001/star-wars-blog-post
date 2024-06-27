const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
      starships: [],
      favorites: [],
      characterPictures: [],
    },
    actions: {
      getCharacters: async () => {
        try {
          const response = await fetch("https://swapi.dev/api/people", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error("Characters couldn't be retrieved");
          }

          const userData = await response.json();
          setStore({ characters: userData.results });
          console.log(getStore().characters);
        } catch (e) {
          console.log("The following error ocurred: " + e);
        }
      },

      getPlanets: async () => {
        try {
          const response = await fetch("https://swapi.dev/api/planets", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error("Planets couldn't be retrieved");
          }

          const userData = await response.json();
          setStore({ planets: userData.results });
          console.log(getStore().planets);
        } catch (e) {
          console.log("The following error ocurred: " + e);
        }
      },

      getStarships: async () => {
        try {
          const response = await fetch("https://swapi.dev/api/starships", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error("Starships couldn't be retrieved");
          }

          const userData = await response.json();
          setStore({ starships: userData.results });
          console.log(getStore().starships);
        } catch (e) {
          console.log("The following error ocurred: " + e);
        }
      },

      addFavorite: (item) => {
        const store = getStore();
        const isFavorite = store.favorites.some((fav) => fav.url === item.url);
        let updatedFavorites;
        if (isFavorite) {
          updatedFavorites = store.favorites.filter(
            (fav) => fav.url !== item.url
          );
        } else {
          updatedFavorites = [...store.favorites, item];
        }
        setStore({ favorites: updatedFavorites });
        console.log(getStore().favorites);
      },

      removeFavorite: (item) => {
        const store = getStore();
        const updatedFavorites = store.favorites.filter(
          (fav) => fav.url !== item.url
        );
        setStore({ favorites: updatedFavorites });
        console.log(store.favorites);
      },

      getPicturesForCharacters: async () => {
        try {
          const response = await fetch(
            "https://starwars-visualguide.com/#/characters",
            {
              method: "GET",
              headers: {
                "Content-type": "application/json",
              },
            }
          );

          if (!response.ok) {
            throw new Error("Starships couldn't be retrieved");
          }

          const userData = await response.json();
          setStore({ characterPictures: userData });
          console.log(getStore().characterPictures);
        } catch (e) {
          console.log(e);
        }
      },
    },
  };
};

export default getState;
