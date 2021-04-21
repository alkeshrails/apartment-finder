import React from 'react';
import { mount } from 'enzyme';
import SearchAndFilter from '../components/SearchAndFilter';

describe('Search and filter tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <SearchAndFilter />,
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('Search and filter bar should render', () => {
    expect(wrapper.find('div.search-and-filter').length).toBe(1);
  });

  it('input field should render', () => {
    expect(wrapper.find('div.search-and-filter > div > input').length).toBe(1);
  });

  it('filter button should render', () => {
    expect(wrapper.find('div.search-and-filter  > button').length).toBe(1);
  });

});