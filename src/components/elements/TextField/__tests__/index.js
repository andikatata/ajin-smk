import React from 'react';
import renderer from 'react-test-renderer';
import TextField from '../index';

describe('TextField', () => {
  it('renders correctly', () => {
    const meta = {
      error: false,
      touched: false,
    };
    const tree = renderer
      .create(<TextField meta={meta} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with helper text', () => {
    const meta = {
      error: 'test',
      touched: true,
    };
    const tree = renderer
      .create(<TextField meta={meta} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});