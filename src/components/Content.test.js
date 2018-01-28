import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {Content} from './Content';

it('renders without crashing', () => {
  shallow(<Content />);
});

test('Should render Content correctly', () => {
    const tree = renderer.create(
        <Content />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
