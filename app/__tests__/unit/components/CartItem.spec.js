import React from 'react';
import { shallow } from 'enzyme';
import CartItem from '../../../components/CartItem/CartItem';
import { MOVIES_IMG_PATH } from '../../../constants/config';

describe('<CartItem />', () => {
    const mockedOnRemove = jest.fn();
    const PROPS = {
        item: {
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
        onRemove: mockedOnRemove,
    };
    let component;

    beforeEach(() => {
        component = shallow(<CartItem {...PROPS} />);
    });

    it('should render correctly in "debug" mode', () => {
        expect(component).toMatchSnapshot();
    });

    it('should render correctly each field', () => {
        const image = component.find('.CartItem img');
        const title = component.find('.CartItem__title');
        const price = component.find('.CartItem__price');

        expect(image.prop('src')).toBe(`${MOVIES_IMG_PATH}${PROPS.item.poster_path}`);
        expect(title.contains(PROPS.item.title)).toBeTruthy();
        expect(price.contains(PROPS.item.budget)).toBeTruthy();
    });

    it('should trigger the onRemove action when the user hits the button to remove', () => {
        const button = component.find('.CartItem__remove');
        button.simulate('click');

        expect(mockedOnRemove).toHaveBeenCalled();
    });
});
