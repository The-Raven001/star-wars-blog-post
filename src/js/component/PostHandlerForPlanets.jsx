import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const PostHandlerForPlanets = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();

  const [planet, setPlanet] = useState();

  useEffect(() => {
    const foundPlanet = store.planets.find(
      (element) => element.url.split("/")[5] === id
    );

    if (foundPlanet) {
      setPlanet(foundPlanet);
    }
    console.log(foundPlanet);
  }, [id, store.planets]);

  return (
    <div>
      {planet ? (
        <div className="container">
          <div className="m-4 ms-0">
            <button className="btn btn-light" onClick={() => navigate("/")}>
              <strong>Back to home</strong>
            </button>
          </div>
          <div>Home / Planets / {planet.name}</div>
          <div className="d-flex">
            <div>
              <h1>
                <strong>{planet.name}</strong>
              </h1>
              <img
                className="w-100 pictureForItem card"
                src={`https://starwars-visualguide.com/assets/img/planets/${
                  planet.url.split("/")[5]
                }.jpg`}
                alt="planets"
                onError={(e) =>
                  (e.target.src =
                    "https://starwars-visualguide.com/assets/img/big-placeholder.jpg")
                }
              ></img>
            </div>
            <div className="mt-5">
              <h2>
                <strong className="m-2">Characteristics</strong>
              </h2>
              <ul className="fs-5 m-2">
                <li>Climate: {planet.climate}.</li>
                <li>Terrain: {planet.terrain}.</li>
                <li>Diameter: {planet.diameter}km.</li>
                <li>Orbital Period: {planet.orbital_period} days.</li>
                <li>Populatin: {planet.population} entities.</li>
                <li>Rotation Period: {planet.rotation_period} hours.</li>
                <li>Gravity: {planet.gravity}.</li>
              </ul>
            </div>
          </div>
          <div className="container mt-5">
            <h2>
              <strong>Description</strong>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};
