import React from "react";
import useStarWars from "../hooks/useStarWars";
import StarWarsChar from "./StarWarChar";
import { Link } from "react-router-dom";
import "./StarWars.css";

const StarWars: React.FC = (): any => {
  const starWarsList = useStarWars();
  if (!starWarsList.length) return;

  return (
    <div className="star-wars-list">
      {starWarsList.map((item: any, index: number) => {
        return (
          <div key={index}>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              key={item}
              to={`/starwars/${index + 1}`}
            >
              <StarWarsChar char={item} />
            </Link>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default StarWars;
