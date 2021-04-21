import React from 'react';
import { mount } from 'enzyme';
import Filters from '../components/Filters';

describe('Filters test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Filters sideMenuOpen={true} />,
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('Side menu should render', () => {
    expect(wrapper.find('div.filters').length).toBe(1);
  });

  it('price filters should render', () => {
    expect(wrapper.find('div.filters > div.p-2 > div > div > select').length).toBe(2);
  })

  it('sq meter filters should render', () => {
    expect(wrapper.find('div.filters > div.p-3 > div > div> select').length).toBe(2);
  })

  it('bedroom filters should render', () => {
    expect(wrapper.find('div.filters > div > div.flex-fill').length).toBe(6);
  })

  it('save filter button should render', () => {
    expect(wrapper.find('div.filters > div> button').length).toBe(1);
  })

});