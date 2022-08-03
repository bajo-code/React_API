import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";

import { PeliculaCard } from "./PeliculasCard";
import "../assets/scss/Peliculas.scss";
import "../assets/scss/Variables.scss"

export function PeliculasLista() {
    const [movies, setMovies] = useState([]);
 
    useEffect(() => {
        get("/discover/movie").then((data) => {
            setMovies(data.results);
        })
    }, []);
    //console.log(movies);
    return (
        <div className="peliculas">
                <ul className="peliculaGrid">
                    {movies.map((movie) => (
                        <PeliculaCard key={movie.id} movie={movie} />
                    ))}
                </ul>
        </div>
    );
}