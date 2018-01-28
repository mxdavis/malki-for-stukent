import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {Footer} from './Footer.js';

it('renders without crashing', () => {
  shallow(<Footer />);
});

test('Should render Footer correctly', () => {
    const tree = renderer.create(
        <Footer />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
