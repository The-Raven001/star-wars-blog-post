import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PostHandlerForCharacters = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();

  const [character, setCharacter] = useState();

  useEffect(() => {
    const foundCharacter = store.characters.find(
      (element) => element.url.split("/")[5] === id
    );

    if (foundCharacter) {
      setCharacter(foundCharacter);
    }
    console.log(foundCharacter);
  }, [id, store.characters]);

  return (
    <div>
      {character ? (
        <div className="container">
          <div className="m-4 ms-0">
            <button className="btn btn-light" onClick={() => navigate("/")}>
              <strong>Back to home</strong>
            </button>
          </div>

          <div>Home / Characters / {character.name}</div>
          <div className="d-flex">
            <div>
              <h1>
                <strong>{character.name}</strong>
              </h1>
              <img
                className="w-100 pictureForItem card"
                src={`https://starwars-visualguide.com/assets/img/characters/${
                  character.url.split("/")[5]
                }.jpg`}
                alt="..."
                onError={(e) =>
                  (e.target.src =
                    "https://starwars-visualguide.com/assets/img/big-placeholder.jpg")
                }
              ></img>
            </div>
            <div className="mt-5 d-flex">
              <div>
                <h2 className="m-2">
                  <strong>Physical appearance</strong>
                </h2>
                <ul className="fs-5 m-2">
                  <li>Birth Year: {character.birth_year}.</li>
                  <li>Eye color: {character.eye_color}.</li>
                  <li>Gender: {character.gender}.</li>
                  <li>Hair color: {character.hair_color}.</li>
                  <li>Height: {character.height}cm.</li>
                  <li>Mass: {character.mass}kg.</li>
                  <li>Skin color: {character.skin_color}.</li>
                </ul>
              </div>
              <div className="ms-5 mt-2">
                <h2>
                  <strong>Planet</strong>
                </h2>
                <ul className="fs-5">
                  <li>{character.homeworld}</li>
                </ul>
                <h2>
                  <strong>Films</strong>
                </h2>
                <ul className="fs-5">
                  <li>La peli</li>
                </ul>
              </div>
              <div className="ms-5 mt-2"></div>
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
