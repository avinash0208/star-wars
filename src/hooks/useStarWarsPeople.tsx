import { useEffect, useState } from "react";


const useStarWarsPeople = (id:any) => {
    const [starWarPeople, setStarWarPeople] = useState(null);
    useEffect(() => {
        fetchPeople();
    }, []);

    const fetchPeople = async () => {
        const data = await fetch(`https://swapi.dev/api/people/${id}/`);
        const json = await data.json();
        console.log(json);
        setStarWarPeople(json)
    };
    return starWarPeople;
}

export default useStarWarsPeople;