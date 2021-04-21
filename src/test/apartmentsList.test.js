import React from 'react';
import { mount } from 'enzyme';
import ApartmentList from '../components/ApartmentList';

describe('Apartments List', () => {
  let wrapper;
  beforeEach(() => {
    const tempData = [
      {
        id: 1,
        picture: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'This is testing title 1',
        number_of_bedrooms: 1,
        number_of_bathrooms: 2,
        price: 120,
        sqm: 63,
      },
      {
        id: 2,
        picture: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'This is testing title 2',
        number_of_bedrooms: 1,
        number_of_bathrooms: 1,
        price: 240,
        sqm: 63,
      },
      {
        id: 3,
        picture: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'This is testing title 2',
        number_of_bedrooms: 1,
        number_of_bathrooms: 1,
        price: 240,
        sqm: 63,
      },
      {
        id: 4,
        picture: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'This is testing title 2',
        number_of_bedrooms: 1,
        number_of_bathrooms: 1,
        price: 240,
        sqm: 63,
      },
      {
        id: 5,
        picture: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'This is testing title 2',
        number_of_bedrooms: 1,
        number_of_bathrooms: 1,
        price: 240,
        sqm: 63,
      },
    ]

    wrapper = mount(
      <ApartmentList tempData={tempData} data={tempData} />,
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('Apartments list should render', () => {
    expect(wrapper.find('div.apartments').length).toBe(1);
  });

  it('Apartments list should render all entries', () => {
    expect(wrapper.find('div.apartment').length).toBe(5);
  })

  it('Apartments list should show images', () => {
    expect(wrapper.find('div.apartment > div.position-relative > img').length).toBe(5);
  })

});


