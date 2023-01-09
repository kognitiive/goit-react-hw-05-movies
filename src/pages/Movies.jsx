import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { SearchBox } from "components/SearchBox";
import { getMovies } from "MovieAPI";

import { Container, CardWrapper, FilmName } from "components/Home.styled";

const Movies = () => {
  const [movies, setMovies] = useState([])

  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get('query') ?? ''

  useEffect(() => {
    if (filmName === '') { return setMovies([])}
    getMovies(filmName).then(r => {
      return setMovies(r.data.results)
    }).catch(error => {return setMovies([0])})
    }, [filmName])

  const updateQueryString = (query) => {
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  };

  const location = useLocation;

    return <Container>
      <SearchBox value={filmName} onChange={updateQueryString} />
      <CardWrapper>
        { movies[0] === 0 ? "We don`t have any films for your query" : movies.map((movie) => {
                    return (
                        <li key = {movie.id}>
                        <Link to={`${movie.id}`} state={{from: location}}>
                          <img src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`} alt='poster' width='200' height='300' />
                          <FilmName>{movie.original_title}</FilmName>
                        </Link>
                        </li>
                    )
                    
                }) }
            </CardWrapper>
    </Container>
}

export default Movies;