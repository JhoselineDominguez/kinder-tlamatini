import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li><Link to="/" style={styles.link}>Inicio</Link></li>
        <li><Link to="/menu" style={styles.link}>Menú</Link></li>
        <li><Link to="/payments" style={styles.link}>Pagos</Link></li>
        <li><Link to="/notifications" style={styles.link}>Notificaciones</Link></li>
        <li><Link to="/profile" style={styles.link}>Perfil</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: { backgroundColor: '#FFD700', padding: '10px' },
  ul: { listStyle: 'none', display: 'flex', justifyContent: 'space-around' },
  link: { textDecoration: 'none', color: '#fff', fontSize: '20px' }
};

export default NavBar;

