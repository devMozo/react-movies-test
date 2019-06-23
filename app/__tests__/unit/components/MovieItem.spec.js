import React from 'react';
import { shallow } from 'enzyme';
import MovieItem from '../../../components/MovieItem/MovieItem';

describe('<MovieItem />', () => {
    const PROPS = { id: 1234, title: 'mocked_title', posterPath: 'poster.jpg', overview: 'mocked_overview' };
    let component;

    beforeEach(() => {
        component = shallow(<MovieItem {...PROPS} />);
    });

    it('should render correctly in "debug" mode', () => {
        expect(component).toMatchSnapshot();
    });

    it('should render correctly each field', () => {
        const image = component.find('.MovieItem__pic img');
        const title = component.find('.MovieItem__header h2');
        const overview = component.find('.MovieItem > p');

        expect(image.prop('src')).toContain(PROPS.posterPath);
        expect(title.contains(PROPS.title)).toBeTruthy();
        expect(overview.contains(PROPS.overview)).toBeTruthy();
    });
});
