import { Menu } from 'react-feather';
import Logo from '../../assets/kasaz.png';

function Header (props) {

  return (
    <div className="header d-flex align-items-center p-2 position-sticky">
      <Menu color="#41AF69" strokeWidth={3} onClick={() => props.setSideMenuOpen(true)} />
      <img src={Logo} alt="logo" height="38px" width="150px" className="ml-2"  />
    </div>
  )
}

export default Header;