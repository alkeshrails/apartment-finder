import { Menu } from 'react-feather';
import Logo from '../../assets/kasaz.png';

function Header () {

  return (
    <div className="header d-flex align-items-center p-2">
      <Menu color="#41AF69" strokeWidth={3} />
      <img src={Logo} alt="logo" height="38px" width="150px" className="ml-2"  />
    </div>
  )
}

export default Header;