import React from 'react';
import { mount } from 'enzyme';
import Header from '../components/Header';

describe('Header tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Header />,
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('Header should render', () => {
    expect(wrapper.find('div.header').length).toBe(1);
  });


  it('Logo should render', () => {
    expect(wrapper.find('div.header > img').length).toBe(1);

  });

});
