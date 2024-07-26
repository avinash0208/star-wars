import React, { useState } from "react";
import useStarWarsPeople from "../hooks/useStarWarsPeople";
import StarWarsFilms from "./StarWarsFilms";
import { useParams } from "react-router-dom";
import "./StarWars.css";

const StarWarsCharDetail: React.FC = (): any => {
  const [editMode, setEditMode] = useState(false);
  const [height, setHeight] = useState(0);
  console.log("AVI LOG");
  const { starwarsId } = useParams();
  const starWarsPeople: any = useStarWarsPeople(starwarsId);

  const changeHeight = () => {
    setEditMode(true);
  };
  if (!starWarsPeople) return;

  return (
    <div className="star-wars-char">
      <p>Name : {starWarsPeople.name}</p>
      <p>Gender : {starWarsPeople.gender}</p>
      <p>Hair Color: {starWarsPeople.hair_color}</p>
      <p>Eye Color: {starWarsPeople.eye_color}</p>
      <p>Height: {!editMode ? starWarsPeople.height : height}</p>
      <div>
        List of films:
        {starWarsPeople.films.map((item: any, index: number) => (
          <StarWarsFilms key={index} url={item} />
        ))}
      </div>
      <button className="edit-button" onClick={changeHeight}>Change Height</button>
      {editMode && (
        <input
          className="input"
          type="number"
          onChange={(e: any) => setHeight(e.target.value)}
        ></input>
      )}
    </div>
  );
};

export default StarWarsCharDetail;
