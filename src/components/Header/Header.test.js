import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {Header} from './Header';

it('renders without crashing', () => {
  shallow(<Header />);
});

test('Should render Header correctly', () => {
    const tree = renderer.create(
        <Header />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
