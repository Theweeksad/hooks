import { useState, useEffect } from "react";

const useCharacters = url => {
    const [charaters, setCharacter] = useState([]);
    useEffect(() => {
        fetch(url)
           .then(response => response.json())
           .then(data => setCharacter(data.results))
    }, [url]);
    return charaters;
};

export default useCharacters;