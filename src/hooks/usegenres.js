
import {useEffect, useState} from "react";

import { getGenres } from "@/api/api"



const useGenres  = () => {
    const [genres, setGenres] = useState([])

const loadGenres = async ()=>{
    try { const data = await getGenres();
        setGenres(data.genres);
     }catch {setGenres([])};
}


useEffect (()=>{
loadGenres()

}, [])

return genres


};

export default useGenres