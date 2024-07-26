import { useEffect, useState } from "react";


const useStarWarsPlanet = (url:string) => {
    const [starWarPlanet, setStarWarPlanet] = useState(null);
    useEffect(() => {
        fetchPlanet();
    }, []);

    const fetchPlanet = async () => {
        const data = await fetch(url);
        const json = await data.json();
        console.log(json);
        setStarWarPlanet(json.name)
    };
    return starWarPlanet;
}

export default useStarWarsPlanet;