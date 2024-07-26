import { useEffect, useState } from "react";


const useStarWarsFilm = (url:string) => {
    const [starWarFilm, setStarWarFilm] = useState(null);
    useEffect(() => {
        fetchFilm();
    }, []);

    const fetchFilm = async () => {
        const data = await fetch(url);
        const json = await data.json();
        console.log(json);
        setStarWarFilm(json.title)
    };
    return starWarFilm;
}

export default useStarWarsFilm;