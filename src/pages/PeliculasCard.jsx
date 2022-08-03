import "../assets/scss/Peliculas.scss";
import { Link } from 'react-router-dom'

export function PeliculaCard({movie}) {
    const imagenUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    
    return <li className="peliculaCard">
            <Link to={"/movies/" + movie.id}>
                <div className="card_container">
                    <img className="peliculaImage" src={imagenUrl} alt={movie.title}/>
                    <span>{movie.title}</span>
                </div>
            </Link>
            </li>
}