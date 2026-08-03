
import { useEffect, useState } from "react";

import {searchMovies} from "@/api/api";

const useSearchMovies = (query)=>{
const [results, setResults] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState('')

useEffect (() => {

    
    if (!query) {
        setResults([]);
        setLoading(false);
        return;
    }

    let active = true;

    const runsearch = async () =>{
        try{
            setLoading(true);
            setError("");

            const data = await searchMovies(query);
            if (active){setResults(data.results)}

        } catch (error) {
           if (active) setError(error.message);
        }finally{
            if (active) setLoading (false);
        }
    };


    runsearch();

    return ()=>{
        active = false;
    };

},[query]  );

return {results, loading, error}

};

export default useSearchMovies;