import React from 'react';
import { shallow } from 'enzyme';
import FullMovie from '../../../components/FullMovie/FullMovie';
import { MOVIES_IMG_PATH } from '../../../constants/config';

describe('<FullMovie />', () => {
    const PROPS = {
        movie: {
            poster_path: 'mocked_poster',
            vote_average: 2,
            title: 'mocked_title',
            overview: 'mocked_overview',
            production_companies: [
                {
                    name: 'Company 1',
                },
                {
                    name: 'Company 2',
                },
            ],
            production_countries: [
                {
                    name: 'Country 1',
                },
                {
                    name: 'Country 2',
                },
            ],
            status: 'Released',
            budget: 123456789,
            adult: false,
            release_date: '17-2-2019',
        },
    };
    let component;

    beforeEach(() => {
        component = shallow(<FullMovie {...PROPS} />);
    });

    it('should render correctly in "debug" mode', () => {
        expect(component).toMatchSnapshot();
    });

    it('should render correctly each field', () => {
        const image = component.find('.FullMovie__header img');
        const title = component.find('.FullMovie__info h2');
        const overview = component.find('.FullMovie__description p');
        const features = component.find('.FullMovie__features li');

        expect(image.prop('src')).toBe(`${MOVIES_IMG_PATH}${PROPS.movie.poster_path}`);
        expect(title.contains(PROPS.movie.title)).toBeTruthy();
        expect(overview.contains(PROPS.movie.overview)).toBeTruthy();
        expect(features.length).toBe(6);
    });
});
