import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../index';

jest.mock('react-router-dom');

describe('Card', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Card className={{}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});