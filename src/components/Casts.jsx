import { useEffect, useState } from "react";
import { getCasts } from "MovieAPI"
import { useParams } from "react-router-dom";

import { List, Item } from "./Casts.styled";

const Casts = () => { 

    const [casts, setCasts] = useState([])
    const { id } = useParams();
    
    useEffect(() => { 
        getCasts(id).then(r => { setCasts(r.data.cast) })
    }, [id])
    return (
        <div>
            <List>
                {casts.map((cast) => {
                    return <Item key={cast.name}>
                        <img src={`https://www.themoviedb.org/t/p/original${cast.profile_path}`} alt='portrait' width='57' height='86' />
                        <div>
                            <p>{cast.name}</p>
                            <p>Character: {cast.character}</p>
                        </div>
                </Item> })}
            </List>
        </div>
    )
}

export default Casts;