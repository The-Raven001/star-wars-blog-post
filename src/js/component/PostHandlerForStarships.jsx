import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const PostHandlerForStarships = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();

  const [starship, setStarship] = useState();

  useEffect(() => {
    const foundStarship = store.starships.find(
      (element) => element.url.split("/")[5] === id
    );

    if (foundStarship) {
      setStarship(foundStarship);
    }
    console.log(foundStarship);
  }, [id, store.starships]);

  return (
    <div>
      {starship ? (
        <div className="container">
          <div className="m-4 ms-0">
            <button className="btn btn-light" onClick={() => navigate("/")}>
              <strong>Back to home</strong>
            </button>
          </div>
          <div>Home / Starships / {starship.name}</div>
          <div className="d-flex">
            <div>
              <h1>
                <strong>{starship.name}</strong>
              </h1>
              <img
                className="w-100 pictureForItem card"
                src={`https://starwars-visualguide.com/assets/img/starships/${
                  starship.url.split("/")[5]
                }.jpg`}
                alt="starship"
                onError={(e) =>
                  (e.target.src =
                    "https://starwars-visualguide.com/assets/img/big-placeholder.jpg")
                }
              ></img>
            </div>
            <div className="mt-5 ms-2">
              <h2>
                <strong>Specs</strong>
              </h2>
              <ul className="fs-5">
                <li>Manufacturer: {starship.manufacturer}.</li>
                <li>Starship class: {starship.starship_class}.</li>
                <li>Cost in credits: {starship.cost_in_credits}$</li>
                <li>Cargo capacity: {starship.cargo_capacity}kg.</li>
                <li>Length: {starship.length}</li>
                <li>Consumables: {starship.consumables}.</li>
                <li>Passengers: {starship.passengers} entities.</li>
                <li>Crew: {starship.crew}.</li>

                <li>Hyperdrive rating: {starship.hyperdrive_rating}</li>
                <li>
                  Max atmosphering speed: {starship.max_atmosphering_speed}.
                </li>
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
