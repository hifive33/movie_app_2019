import React from "react";
import Movie from "../components/Movie";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { history, location } = this.props;
        console.log(location.state);
        if (location.state === undefined) {
            history.push("/");
        }
    }

    renderMovies = (movie) =>
        <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.bigPoster}
            genres={movie.genres} />

    render() {
        const { location: { state } } = this.props;
        return state ? (
            <section className="container">
                <div className="detail">
                    {this.renderMovies(state)}
                </div>
            </section>
        ) : null;
    }
}

export default Detail;