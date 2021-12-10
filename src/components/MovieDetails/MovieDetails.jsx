import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieDetails.css'

function MovieList() {

    const dispatch = useDispatch();
    const activeMovie = useSelector(store => store.activeMovie);
    

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    return (
        <main>
            <h1>Movie Details</h1>
            <section className="movieDetail">
                <div key={activeMovie.id} >
                    <h3>{activeMovie.title}</h3>
                    <img src={activeMovie.poster} alt={activeMovie.title}/>
                    <p className="movieDescription">{activeMovie.description}</p>
                </div>
            </section>
        </main>

    );
}

export default MovieList;