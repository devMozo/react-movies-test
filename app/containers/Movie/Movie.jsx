import React from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../../redux-app/actions/MovieAction';
import FullMovie from '../../components/FullMovie/FullMovie';
import HandlerLoaders from '../../components/HandlerLoaders/HandlerLoaders';
import { addItem, removeItem } from '../../redux-app/actions/MyCartAction';
import './Movie.scss';

export class Movie extends React.PureComponent {
    getMovie = () => {
        const { getMovie, match } = this.props;
        getMovie(match.params.id);
    };

    onAdd = () => {
        const { movie, addItem } = this.props;
        addItem(movie);
    };

    onRemove = () => {
        const { movie, removeItem } = this.props;
        removeItem(movie.id);
    };

    isAdded = () => {
        const { movie, items } = this.props;
        return Boolean(items && items.find(item => item.id === movie.id));
    };

    componentDidMount() {
        this.getMovie();
    }

    render() {
        const { movie, loading, error } = this.props;

        return (
            <main className="Movie">
                <HandlerLoaders loading={loading} error={error} onTryAgain={this.getMovie}>
                    <FullMovie movie={movie} onAdd={this.onAdd} onRemove={this.onRemove} added={this.isAdded()} />
                </HandlerLoaders>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.movie,
        ...state.myCart,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMovie: movieId => {
            dispatch(getMovie(movieId));
        },
        addItem: item => {
            dispatch(addItem(item));
        },
        removeItem: idItem => {
            dispatch(removeItem(idItem));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Movie);
