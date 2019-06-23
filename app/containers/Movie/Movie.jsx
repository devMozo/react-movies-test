import React from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../../redux-app/actions/MovieAction';
import FullMovie from '../../components/FullMovie/FullMovie';
import HandlerLoaders from '../../components/HandlerLoaders/HandlerLoaders';
import './Movie.scss';

export class Movie extends React.PureComponent {
    getMovie = () => {
        const { getMovie, match } = this.props;
        getMovie(match.params.id);
    };

    componentDidMount() {
        this.getMovie();
    }

    render() {
        const { movie, loading, error } = this.props;

        return (
            <main className="Movie">
                <HandlerLoaders loading={loading} error={error} onTryAgain={this.getMovie}>
                    <FullMovie movie={movie} />
                </HandlerLoaders>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.movie,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMovie: movieId => {
            dispatch(getMovie(movieId));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Movie);
