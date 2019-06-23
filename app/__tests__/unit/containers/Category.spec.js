import React from 'react';
import { shallow, mount } from 'enzyme';
import { Category } from '../../../containers/Category/Category';
import { BrowserRouter as Router } from 'react-router-dom';

const MOCK_DISCOVER_MOVIE = require('../../../__mocks__/discoverMovie.json');

describe('<Category />', () => {
    let PROPS;
    const mockedGetMovies = jest.fn();

    beforeEach(() => {
        PROPS = {
            movies: [],
            loading: false,
            error: false,
            getMovies: mockedGetMovies,
            match: {
                params: {
                    id: 28,
                },
            },
        };
    });

    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Category {...PROPS} />);
        expect(component).toMatchSnapshot();
    });

    it('should render all categories when the data was fetched', () => {
        PROPS = {
            ...PROPS,
            movies: MOCK_DISCOVER_MOVIE.results,
        };

        const component = mount(
            <Router>
                <Category {...PROPS} />
            </Router>,
        );

        expect(component.find('.MovieItem').length).toBe(MOCK_DISCOVER_MOVIE.results.length);
        expect(mockedGetMovies).toHaveBeenCalled();
    });
});
