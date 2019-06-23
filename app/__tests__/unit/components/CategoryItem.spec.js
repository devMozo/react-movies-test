import React from 'react';
import { shallow } from 'enzyme';
import CategoryItem from '../../../components/CategoryItem/CategoryItem';

describe('<CategoryItem />', () => {
    const PROPS = {
        id: 1234,
        name: 'Mocked Name',
    };

    it('should render correctly in "debug" mode', () => {
        const component = shallow(<CategoryItem {...PROPS} />);
        expect(component).toMatchSnapshot();
    });
});
