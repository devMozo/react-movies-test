import React from 'react';
import { connect } from 'react-redux';
import HandlerLoaders from '../../components/HandlerLoaders/HandlerLoaders';
import MovieItem from '../../components/MovieItem/MovieItem';
import { getMovies } from '../../redux-app/actions/MovieByCategoryAction';
import './Category.scss';

export class Category extends React.PureComponent {
    getMovies = () => {
        const { getMovies, match } = this.props;
        getMovies(match.params.id, 1);
    };

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { movies, loading, error } = this.props;

        return (
            <section className="Category">
                <HandlerLoaders loading={loading} error={error} onTryAgain={this.getMovies}>
                    <ul className="Category__list">
                        {movies &&
                            movies.map(movie => (
                                <MovieItem
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    posterPath={movie.poster_path}
                                    overview={movie.overview}
                                />
                            ))}
                    </ul>
                </HandlerLoaders>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.movieByCategory,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMovies: (genreId, page) => {
            dispatch(getMovies(genreId, page));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Category);
