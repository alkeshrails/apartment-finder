import React from 'react';
import { mount } from 'enzyme';
import SideMenu from '../components/SideMenu';

describe('Side Menu test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <SideMenu sideMenuOpen={true} />,
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('Side menu should render', () => {
    expect(wrapper.find('div.side-menu-open').length).toBe(1);
  });

});