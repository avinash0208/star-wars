import { useEffect, useState } from "react";


const useStarWars = () => {
    const [starWarsList, setStarWarsList] = useState([]);
    useEffect(() => {
        fetchList();
    }, []);

    const fetchList = async () => {
        const data = await fetch('https://swapi.dev/api/people?page=1');
        const json = await data.json();
        console.log(json);
        setStarWarsList(json.results)
    };
    return starWarsList;
}

export default useStarWars;