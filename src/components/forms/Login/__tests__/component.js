import React from 'react';
import renderer from 'react-test-renderer';
import Component from '../component';

jest.mock('redux-form');
jest.mock('../../../../components/elements/TextField');

describe('Component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Component />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with message', () => {
    const message = 'test';
    const tree = renderer
      .create(<Component message={message} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});