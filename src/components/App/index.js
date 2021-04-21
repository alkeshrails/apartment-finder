import React, {useState} from 'react';
import Header from '../Header';
import SideMenu from '../SideMenu';
import MainContentArea from '../MainContentArea';
import './styles.css';

function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  return (
    <div className="whole-container">
      <SideMenu sideMenuOpen={sideMenuOpen} setSideMenuOpen={setSideMenuOpen} />
      <Header setSideMenuOpen={setSideMenuOpen} />
      <MainContentArea />
    </div>
  );
}

export default App;