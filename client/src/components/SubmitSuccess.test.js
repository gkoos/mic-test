import React from 'react';
import SubmitSuccess from './SubmitSuccess';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<SubmitSuccess/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});