import React from 'react';

const PaymentsPage = () => {
  const transactionHistory = [
    { id: 1, date: '2025-08-01', description: 'Cuota de Desayuno - Agosto', amount: 850.00, status: 'Pagado' },
    { id: 2, date: '2025-07-01', description: 'Cuota de Desayuno - Julio', amount: 850.00, status: 'Pagado' },
    { id: 3, date: '2025-09-01', description: 'Cuota de Desayuno - Septiembre', amount: 850.00, status: 'Pendiente' },
  ];

  return (
    <div className="payments-container">
      <h2>Módulo de Pagos</h2>
      
      <section className="pending-payment">
        <h3>Pago Pendiente (Septiembre)</h3>
        <p>Monto: $250.00 MXN</p>
        <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Pagar Ahora
        </button>
      </section>

      <section className="history">
        <h3>Historial de Pagos</h3>
        <table style={{ width: '38%', borderCollapse: 'collapse', marginTop: '15px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th>Fecha</th>
              <th>Descripción</th>
              <th>Monto</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {transactionHistory.map(tx => (
              <tr key={tx.id}>
                <td>{tx.date}</td>
                <td>{tx.description}</td>
                <td>${tx.amount.toFixed(2)}</td>
                <td style={{ color: tx.status === 'Pagado' ? 'green' : 'red' }}>{tx.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default PaymentsPage;