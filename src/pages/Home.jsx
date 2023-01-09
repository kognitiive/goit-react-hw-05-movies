import { getTrending } from "MovieAPI";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Container, CardWrapper, FilmName } from "components/Home.styled";

const Home = () => {
    const [trending, setTrending] = useState([])

    useEffect(() => { 
        getTrending().then(r => {setTrending(r.data.results)})
    }, [])

    const location = useLocation();
    
    return (
        <main>
            <Container>
            <CardWrapper>
                {trending.map((result) => {
                    return (
                        <li key = {result.id}>
                          <Link to={`movies/${result.id}`} state={{from: location}}>
                          <img src={`https://www.themoviedb.org/t/p/original${result.poster_path}`} alt='poster' width='200' height='300' />
                          <FilmName>{result.original_title}</FilmName>
                        </Link>
                        </li>
                    )
                    
                })}
                </CardWrapper>
            </Container>
        </main>
    )
}

export default Home;
