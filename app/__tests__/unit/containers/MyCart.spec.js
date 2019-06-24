import React from 'react';
import { shallow, mount } from 'enzyme';
import { MyCart } from '../../../containers/MyCart/MyCart';
import { BrowserRouter as Router } from 'react-router-dom';

const MOCK_DISCOVER_MOVIE = require('../../../__mocks__/discoverMovie.json');

describe('<MyCart />', () => {
    let PROPS;
    const mockedOnremove = jest.fn();

    beforeEach(() => {
        PROPS = {
            removeItem: mockedOnremove,
            items: MOCK_DISCOVER_MOVIE.results,
        };
    });

    it('should render correctly in "debug" mode', () => {
        const component = shallow(<MyCart {...PROPS} />);
        expect(component).toMatchSnapshot();
    });

    it('should render a full list of items', () => {
        const component = mount(
            <Router>
                <MyCart {...PROPS} />
            </Router>,
        );

        expect(component.find('.CartItem').length).toBe(MOCK_DISCOVER_MOVIE.results.length);
    });
});
