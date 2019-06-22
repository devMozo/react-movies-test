import React from 'react';
import { connect } from 'react-redux';

class Movie extends React.PureComponent {
    render() {
        const { movies, loading, error } = this.props;

        return (
            <section className="Movie">
                <ul></ul>
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
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Movie);
