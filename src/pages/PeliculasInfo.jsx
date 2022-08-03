import "../assets/scss/Peliculas.scss";
import "../assets/scss/Variables.scss"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";

export function PeliculasInfo() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        get("/movie/" + movieId).then((data) => {
            setMovie(data);
        })
    }, [movieId])

    if (!movie) {
        return null;
    }


    const imagenUrl = "https://image.tmdb.org/t/p/w400" + movie.poster_path;

    return (
        <div className="peliculasInfo">
               <img className="peliculasImg_size" src={imagenUrl} alt={movie.title} />
                <div className="peliculasInfo_col">
                    <div className="titulo_inline">
                        <span className="bold_text">Title: </span>
                        <span>{movie.title}</span>
                    </div>
                    <div className="titulo_inline">
                        <span className="bold_text">Genres: </span>
                        <span>{movie.genres.map(genre => genre.name).join(", ")}</span>
                    </div>
                    <span className="bold_text">Description:</span>
                    <span>{movie.overview}</span>
                </div>
        </div>
    );
}