import { useState, useEffect } from "react";

// custom hook

export const useFetch = (url) => {

    // data definido como null pois nao sabemos o que vem como resposta da api
    // se e string, etc...
    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            //resposta que vem da API
            const res = await fetch(url);

            //convertemos para json
            const json = await res.json();

            //setData recebe os dados json
            setData(json);

        }

        //executamos a funçao
        fetchData();

    }, [url]);

    return { data };


}
