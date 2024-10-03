import React from 'react';

const Profile = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Perfil</h1>
      <p>Nombre: Juan Pérez</p>
      <p>Correo Electrónico: juanperez@example.com</p>
      <p>Teléfono: (33) 3456-7890</p>
      <button style={styles.button}>Editar Perfil</button>
    </div>
  );
};

const styles = {
  container: { padding: '20px' },
  header: { color: '#00BFFF' },
  button: { marginTop: '20px', padding: '10px', backgroundColor: '#FFD700', border: 'none', borderRadius: '5px', cursor: 'pointer' }
};

export default Profile;
