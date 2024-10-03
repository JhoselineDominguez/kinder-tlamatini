import React from 'react';

const Notifications = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Notificaciones</h1>
      <p>No tienes nuevas notificaciones.</p>
    </div>
  );
};

const styles = {
  container: { padding: '20px' },
  header: { color: '#FF4500' }
};

export default Notifications;
