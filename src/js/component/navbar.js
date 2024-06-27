import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-dark mb-3 d-flex justify-content-between">
      <div className="ps-5 mt-5">
        <img
          className="star-wars-logo"
          src="data:image/png;base64,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"
          alt="..."
        ></img>
      </div>

      <div className="dropdown me-5 pe-5">
        <button
          className="btn btn-light dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites <i className="fas fa-heart"></i>
        </button>
        <ul className="dropdown-menu text-center">
          {store.favorites.length == 0 ? (
            <span className="m-3">No favorites</span>
          ) : (
            store.favorites.map((task, index) => (
              <li className="m-1 p-0 text-center">
                <strong>{task.name}</strong>
              </li>
            ))
          )}
        </ul>
      </div>
    </nav>
  );
};
