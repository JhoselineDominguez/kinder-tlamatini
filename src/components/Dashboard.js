import React from 'react';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>¡Bienvenido a Kinder Tlamatini!</h1>
      <div style={styles.section}>
        <h2>Menú Semanal</h2>
        <p>Próximas actualizaciones para esta semana.</p>
      </div>
      <div style={styles.section}>
        <h2>Estado de Pagos</h2>
        <p>No tienes pagos pendientes.</p>
      </div>
      <div style={styles.section}>
        <h2>Notificaciones Recientes</h2>
        <p>Actualización: Cambios en el menú del viernes.</p>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '20px' },
  header: { color: '#00BFFF' },
  section: { marginTop: '20px', padding: '10px', backgroundColor: '#FFFAF0', borderRadius: '8px' }
};

export default Dashboard;
