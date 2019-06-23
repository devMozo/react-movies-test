import React from 'react';
import { shallow, mount } from 'enzyme';
import { Home } from '../../../containers/Home/Home';
import { BrowserRouter as Router } from 'react-router-dom';

const MOCK_CATEGORIES = require('../../../__mocks__/categories.json');

describe('<Home />', () => {
    let PROPS;
    const mockedGetAll = jest.fn();

    beforeEach(() => {
        PROPS = {
            categories: [],
            loading: false,
            error: false,
            getAll: mockedGetAll,
        };
    });

    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Home {...PROPS} />);
        expect(component).toMatchSnapshot();
    });

    it('should render all categories when the data was fetched', () => {
        PROPS = {
            ...PROPS,
            categories: MOCK_CATEGORIES.genres,
        };

        const component = mount(
            <Router>
                <Home {...PROPS} />
            </Router>,
        );

        expect(component.find('.CategoryItem').length).toBe(MOCK_CATEGORIES.genres.length);
        expect(mockedGetAll).toHaveBeenCalled();
    });
});
