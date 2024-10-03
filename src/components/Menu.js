import React from 'react';

const Menu = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Menú Semanal</h1>
      <p>Lunes: Pollo con verduras</p>
      <p>Martes: Espagueti</p>
      <p>Miércoles: Ensalada fresca con agua de horchata</p>
      <p>Jueves: Tacos de barbacoa</p>
      <p>Viernes: Sándwiches</p>
    </div>
  );
};

const styles = {
  container: { padding: '20px' },
  header: { color: '#FF6347' }
};

export default Menu;
