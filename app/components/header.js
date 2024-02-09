
import Link from 'next/link';


import styles from './styles/header.module.css';
import { Navmenu } from './navmenu';

const Header = () => {
  

  return (
    <nav className={styles.navbar}>
      
      <Navmenu/>
      
    </nav>
  );
};

export default Header;
