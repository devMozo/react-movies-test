import React from 'react';
import { shallow, mount } from 'enzyme';
import { Movie } from '../../../containers/Movie/Movie';

const MOCK_UNIT_MOVIE = require('../../../__mocks__/unitMovie.json');

describe('<Movie />', () => {
    let PROPS;
    const mockedGetMovie = jest.fn();

    beforeEach(() => {
        PROPS = {
            movie: {},
            loading: false,
            error: false,
            getMovie: mockedGetMovie,
            match: {
                params: {
                    id: 320288,
                },
            },
        };
    });

    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Movie {...PROPS} />);
        expect(component).toMatchSnapshot();
    });

    it('should render all categories when the data was fetched', () => {
        PROPS = {
            ...PROPS,
            movie: MOCK_UNIT_MOVIE,
        };

        const component = mount(<Movie {...PROPS} />);

        expect(component.find('.FullMovie').exists()).toBeTruthy();
        expect(mockedGetMovie).toHaveBeenCalled();
    });
});
