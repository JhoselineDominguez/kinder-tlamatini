import React from 'react';

const Payments = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Pagos</h1>
      <p>Estado de pagos: Todos los pagos están al día.</p>
    </div>
  );
};

const styles = {
  container: { padding: '20px' },
  header: { color: '#32CD32' }
};

export default Payments;
