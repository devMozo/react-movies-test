import React from 'react';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import { connect } from 'react-redux';
import { getAll } from '../../redux-app/actions/CategoryAction';
import './Home.scss';

class Home extends React.PureComponent {
    componentDidMount() {
        const { getAll } = this.props;
        getAll();
    }

    render() {
        const { categories } = this.props;

        return (
            <main className="Home">
                <ul>
                    {categories.map(category => (
                        <CategoryItem name="Drama" />
                    ))}
                </ul>
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
