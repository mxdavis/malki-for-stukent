import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {Navbar} from './Navbar.js';

it('renders without crashing', () => {
  shallow(<Navbar />);
});

test('Should render Navbar correctly', () => {
    const tree = renderer.create(
        <Navbar />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
