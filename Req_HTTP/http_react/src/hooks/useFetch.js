import { useState, useEffect } from "react";

// custom hook

export const useFetch = (url) => {
    // data definido como null pois nao sabemos o que vem como resposta da api
    // se e string, etc...
    const [data, setData] = useState(null);

    // criando o loading
    const [loading, setLoading] = useState(false);

    //tratando erros
    const [error, setError] = useState(null);

    // refatorando o POST
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // setando o ID
    const [itemID, setItemID] = useState(null);

    // Configurando o header
    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
        } else if (method === "DELETE") {
                setConfig({
                    method,
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                setItemID(data)
        }
        setMethod(method);
    }
    

    useEffect(() => {

        const fetchData = async () => {
            // carregando os dados
            setLoading(true);

            //tratando erros
            try {
                //resposta que vem da API
                const res = await fetch(url);

                //convertemos para json
                const json = await res.json();

                //setData recebe os dados json
                setData(json);
            } catch (e) {
                console.error(e);

                setError("Houve algum erro ao carregar os dados!")
            }

            // depois de receber os dados
            setLoading(false);

        }

        //executamos a funçao
        fetchData();

    }, [url, callFetch]);

    // refatorando o POST (usando o hook para adicionar os produtos)
    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                let fetchOptions = [url, config];
    
                const res = await fetch(...fetchOptions);

                const json = await res.json();

                setCallFetch(json);
    
            } else if (method === "DELETE" && itemID) {
                const deleteURL = `${url}/${itemID}`;

                const res = await fetch(deleteURL, { method: "DELETE" });
                
                if (res.ok) {
                    setCallFetch(true);
                }
            }
        }

        httpRequest();

    }, [config, method, url, itemID])

    // nesse caso estamos exportando os dados usando o return
    return { data, httpConfig, loading, error};


}
