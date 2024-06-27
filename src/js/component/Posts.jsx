import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

/*
 *Ask about color for main scrollbar
 *Ask Rendering of pictures based on the length of the titler
 * Ask about making a bottom for heart true or false
 
 */

const Posts = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const isFavorite = (item) => {
    return store.favorites.some((fav) => fav.url === item.url);
  };

  return (
    <div>
      <h1>Star Wars blog guide</h1>

      <h2 className="d-flex justify-content-start px-5">Characters</h2>
      <div className="d-flex  cards-container">
        {store.characters == [] ? (
          <span>Could not load characters</span>
        ) : (
          store.characters.map((character, index) => (
            <div key={index} className="card m-2">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${
                  character.url.split("/")[5]
                }.jpg`}
                className="card-img-top"
                alt="character"
                onError={(e) =>
                  (e.target.src =
                    "https://starwars-visualguide.com/assets/img/big-placeholder.jpg")
                }
              ></img>
              <div className="card-body text-start">
                <h5 className="card-title">
                  <strong>{character.name}</strong>
                </h5>
                <p className="m-0">Height: {character.height} cm.</p>
                <p className="m-0">Mass: {character.mass}kg.</p>
                <p className="m-0">Gender: {character.gender}.</p>
              </div>
              <div className="card-footer d-flex justify-content-around">
                <button
                  className="btn btn-dark"
                  onClick={() =>
                    navigate(`/character/${character.url.split("/")[5]}`)
                  }
                >
                  More details
                </button>
                <button
                  className="btn btn-dark"
                  onClick={() => actions.addFavorite(character)}
                >
                  <i
                    className={`fas fa-heart ${
                      isFavorite(character) ? "text-danger" : ""
                    }`}
                  ></i>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <h2 className="d-flex justify-content-start px-5 mt-5">Planets</h2>
      <div className="d-flex cards-container">
        {store.planets == [] ? (
          <span>Could not load planets</span>
        ) : (
          store.planets.map((planet, index) => (
            <div key={index} className="card m-2">
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${
                  planet.url.split("/")[5]
                }.jpg`}
                className="card-img-top"
                alt="planet"
                onError={(e) =>
                  (e.target.src =
                    "https://starwars-visualguide.com/assets/img/big-placeholder.jpg")
                }
              ></img>
              <div className="card-body text-start">
                <h5 className="card-title">
                  <strong>{planet.name}</strong>
                </h5>
                <p className="m-0">Climate: {planet.climate}.</p>
                <p className="m-0">Terrain: {planet.terrain}.</p>
                <p className="m-0">Population: {planet.population} entities.</p>
              </div>
              <div className="card-footer d-flex justify-content-around">
                <button
                  className="btn btn-dark"
                  onClick={() =>
                    navigate(`/planet/${planet.url.split("/")[5]}`)
                  }
                >
                  More details
                </button>
                <button
                  className="btn btn-dark"
                  onClick={() => actions.addFavorite(planet)}
                >
                  <i
                    className={`fas fa-heart ${
                      isFavorite(planet) ? "text-danger" : ""
                    }`}
                  ></i>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <h2 className="d-flex justify-content-start px-5 mt-5">Starships</h2>
      <div className="d-flex cards-container">
        {store.starships == [] ? (
          <span>Could not load starships</span>
        ) : (
          store.starships.map((starship, index) => (
            <div key={index} className="card m-2">
              <img
                src={`https://starwars-visualguide.com/assets/img/starships/${
                  starship.url.split("/")[5]
                }.jpg`}
                className="card-img-top"
                alt="starship"
                onError={(e) =>
                  (e.target.src =
                    "https://starwars-visualguide.com/assets/img/big-placeholder.jpg")
                }
              ></img>
              <div className="card-body text-start">
                <h5 className="card-title">
                  <strong>{starship.name}</strong>
                </h5>
                <p className="m-0">Cost: {starship.cost_in_credits}$</p>
                <p className="m-0">Crew: {starship.crew}</p>
                <p className="m-0">
                  Passengers: {starship.passengers} entities.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-around">
                <button
                  className="btn btn-dark"
                  onClick={() =>
                    navigate(`/starship/${starship.url.split("/")[5]}`)
                  }
                >
                  More details
                </button>
                <button
                  className="btn btn-dark"
                  onClick={() => actions.addFavorite(starship)}
                >
                  <i
                    className={`fas fa-heart ${
                      isFavorite(starship) ? "text-danger" : ""
                    }`}
                  ></i>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Posts;
