
import Link from 'next/link';


import styles from './styles/header.module.css';
import { Navmenu } from './navmenu';

const Header = () => {
  

  return (
    <nav className='containerNav'>
      
      <Navmenu/>
      
    </nav>
  );
};

export default Header;
