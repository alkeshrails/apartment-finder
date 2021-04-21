import React from 'react';
import { X } from 'react-feather';
import './styles.css';

function SideMenu (props) {
  return (
    <div className={`${props.sideMenuOpen ? 'side-menu-open' : 'side-menu-close'}`}>
      <div className="p-2 text-right">
        <X onClick={() => props.setSideMenuOpen(false)}/>
      </div>
      <div className="m-2 p-1 border-bottom">
        Home
      </div>
      <div className="m-2 p-1 border-bottom">
        About
      </div>
    </div>
  )
}

export default SideMenu;