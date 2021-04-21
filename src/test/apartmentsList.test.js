import React from 'react';
import { mount } from 'enzyme';
import ApartmentList from '../components/ApartmentList';

describe('Apartments List', () => {
  let wrapper;
  beforeEach(() => {
    const tempData = [
      {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'This is testing title 1',
        bedCount: 1,
        bathCount: 2,
        price: '120.000 $',
        pricePerSqMtr: '2.718 $/m^2',
        sqMtr: '63 m^2',
      },
      {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'This is testing title 2',
        bedCount: 1,
        bathCount: 1,
        price: '240.000 $',
        pricePerSqMtr: '2.2 $/m^2',
        sqMtr: '113 m^2',
      },
      {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'This is testing title 3',
        bedCount: 2,
        bathCount: 3,
        price: '280.000 $',
        pricePerSqMtr: '2.718 $/m^2',
        sqMtr: '103 m^2',
      },
      {
        id: 4,
        imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'This is testing title 4',
        bedCount: 2,
        bathCount: 3,
        price: '280.000 $',
        pricePerSqMtr: '2.718 $/m^2',
        sqMtr: '103 m^2',
      },
      {
        id: 5,
        imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'This is testing title 5',
        bedCount: 2,
        bathCount: 3,
        price: '280.000 $',
        pricePerSqMtr: '2.718 $/m^2',
        sqMtr: '103 m^2',
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


