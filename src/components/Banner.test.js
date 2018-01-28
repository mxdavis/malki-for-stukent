import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {Banner} from './Banner';

it('renders without crashing', () => {
  shallow(<Banner />);
});

test('Should render Banner correctly', () => {
    const tree = renderer.create(
        <Banner /> 
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
