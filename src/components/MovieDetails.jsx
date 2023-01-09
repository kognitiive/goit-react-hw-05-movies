import { Suspense, useEffect, useState } from "react";
import { getMovieById } from "MovieAPI"
import { useParams, useLocation, Outlet } from "react-router-dom";

import { BackLink } from "./BackLink";
import { Container, List, Link } from "./MovieDetails.stytled";

const MovieDetails = () => { 
    const [details, setDetails] = useState([])
    const { id } = useParams();
    
    useEffect(() => { 
        getMovieById(id).then(r => { setDetails(r.data) })
    }, [id])

    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";
    return (
        <main>
            <BackLink to={backLinkHref}>Back to movies</BackLink>
            <Container>
                <img src={`https://www.themoviedb.org/t/p/original${details.poster_path}`} alt='poster' width='200' height='300' />
                <h2>{details.original_title}</h2>
                <p>User score: {Math.ceil( details.vote_average * 10)}%</p>
                <h3>Overviev</h3>
                <p>{details.overview}</p>
                <h3>Genres</h3>
                <p>{details.genres && details.genres.map((genere) => { return genere.name + ' '})}</p>
            </Container>
            <Container>
                <h3>Additional information</h3>
                <List>
                    <li><Link to='casts'>Cast</Link></li>
                    <li><Link to='reviews'>Reviews</Link></li>
                </List>
            </Container>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet/>
            </Suspense>
            
        </main>
    )
}

export default MovieDetails;