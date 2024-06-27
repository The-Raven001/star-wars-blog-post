import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container d-flex justify-content-center">
      <h1>Hello</h1>
      <br />
    </div>
  );
};
