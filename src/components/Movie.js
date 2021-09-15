import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, bigPoster, genres, linkFlag }) {
    const inner = (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie_genres">
                    {genres.map((genre, idx) => (
                        <li key={idx} className="genres_genre">{genre}</li>
                    ))}
                </ul>
                <p className="movie_summary">{summary}</p>
            </div>
        </div>
    );

    return linkFlag ? (
        <Link to={{
            pathname: `/movie/${id}`,
            state: {
                year, title, summary, bigPoster, genres
            }
        }}>
            {inner}
        </Link>
    ) : inner;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
