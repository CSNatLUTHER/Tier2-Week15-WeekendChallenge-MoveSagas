import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import {Link} from 'react-router-dom'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const activeMovie = useSelector(store => store.activeMovie);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                     const setActiveMovie = () => {
                        dispatch( {type: 'SET_ACTIVE', payload:{
                                                        id: movie.id, 
                                                        title: movie.title, 
                                                        poster:movie.poster, 
                                                        description:movie.description 
                                                        }
                                    }
                                )
                    }
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <Link to="/details">
                                <img src={movie.poster} alt={movie.title} onClick={setActiveMovie}/>
                            </Link>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;