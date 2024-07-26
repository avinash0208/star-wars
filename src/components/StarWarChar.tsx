import React from "react";
import useStarWarsPlanet from "../hooks/useStarWarsPlanet";
import "./StarWars.css";

interface IProps {
  char: any;
}

const StarWarsChar: React.FC<IProps> = (props: IProps): any => {
  const { name, gender, homeworld } = props.char;
  const planet = useStarWarsPlanet(homeworld);

  return (
    <div style={{ fontWeight: "bold" }}>
      <div style={{ fontWeight: "bold" }}>
        Name: <span>{name}</span>
      </div>
      <div className="">
        Gender: <span>{gender}</span>
      </div>
      <div className="planet">
        Planet:
        {planet ? <span>{planet}</span> : <span className="shimmer"></span>}
      </div>
    </div>
  );
};

export default StarWarsChar;
