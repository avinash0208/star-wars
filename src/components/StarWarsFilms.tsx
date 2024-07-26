import React from "react";
import useStarWarsFilm from "../hooks/useStarWarsFilm";
import './StarWars.css';

const StarWarsFilms: React.FC<{url:string}> = ({url}): any => {
  console.log("AVI LOG");

  const film =useStarWarsFilm(url);
  if(film===null){
    return <></>
  }

  return <div className="star-war-film">{film}</div>;
};

export default StarWarsFilms;
