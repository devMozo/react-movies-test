import React from 'react';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import { connect } from 'react-redux';
import { getAll } from '../../redux-app/actions/CategoryAction';
import './Home.scss';
import HandlerLoaders from '../../components/HandlerLoaders/HandlerLoaders';

export class Home extends React.PureComponent {
    getAll = () => {
        const { getAll } = this.props;
        getAll();
    };

    componentDidMount() {
        this.getAll();
    }

    render() {
        const { categories, loading, error } = this.props;

        return (
            <main className="Home">
                <HandlerLoaders loading={loading} error={error} onTryAgain={this.getAll}>
                    <ul className="Home__list">
                        {categories &&
                            categories.map(category => (
                                <CategoryItem key={category.id} id={category.id} name={category.name} />
                            ))}
                    </ul>
                </HandlerLoaders>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.category,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAll: () => {
            dispatch(getAll());
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
