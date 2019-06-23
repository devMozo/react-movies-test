import React from 'react';
import { shallow } from 'enzyme';
import HandlerLoaders from '../../../components/HandlerLoaders/HandlerLoaders';

describe('<HandlerLoaders />', () => {
    const mockedFn = jest.fn();
    const PROPS = { loading: false, error: false, onTryAgain: mockedFn, children: <p> Mocked </p> };
    let component;

    beforeEach(() => {
        component = shallow(<HandlerLoaders {...PROPS} />);
    });

    it('should render correctly in "debug" mode', () => {
        expect(component).toMatchSnapshot();
    });

    it("should trigger the function when the user clicks on the 'Try Again' button when an error appears", () => {
        component = shallow(<HandlerLoaders {...PROPS} error={true} />);
        const button = component.find('.HandlerLoaders__button');
        button.simulate('click');

        expect(mockedFn.mock.calls.length).toBe(1);
    });

    it("shouldn't display the button if it's all ok", () => {
        const button = component.find('.HandlerLoaders__button');

        expect(button.exists()).toBeFalsy();
    });
});
