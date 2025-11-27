import React from 'react';

const Notifications = () => {
  const announcements = [
    { id: 1, date: '2025-11-10', sender: 'Comité Escolar', message: 'Recordatorio: Reunión de Padres el próximo viernes a las 18:00 hrs.' },
    { id: 2, date: '2025-11-05', sender: 'Tesorera', message: 'Aviso: La plataforma de pagos estará en mantenimiento el martes por la mañana.' },
    { id: 3, date: '2025-11-28', sender: 'Comité Escolar', message: '¡Felicidades! Iniciamos el segundo bimestre con éxito.' },
  ];

  return (
    <div className="communication-container">
      <h2>Notificaciones y Mensajeria</h2>
      
      <section className="announcements">
        <h3>Avisos Recientes del Kínder</h3>
        {announcements.map(ann => (
          <div key={ann.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
            <p><strong>{ann.sender}</strong> - <small>{ann.date}</small></p>
            <p>{ann.message}</p>
          </div>
        ))}
      </section>

      <section className="message-form" style={{ marginTop: '30px' }}>
        <h3>Enviar Mensaje a Tesorería</h3>
        <textarea 
          placeholder="Escribe tu mensaje aquí..."
          rows="4" 
          style={{ width: '100%', padding: '10px', resize: 'vertical' }}
        />
        <button style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Enviar
        </button>
      </section>
    </div>
  );
};

export default Notifications;