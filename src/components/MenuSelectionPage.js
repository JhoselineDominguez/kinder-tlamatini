import React, { useState } from 'react';

const MenuSelectionPage = () => {
  const [menu, setMenu] = useState({ dia: 'Lunes', platillo: '', fruta: '', bebida: '' });
  const [validationStatus, setValidationStatus] = useState(null);

  const validateMenu = (plato) => {
    const platoLower = plato.toLowerCase();
    
    if (platoLower.includes('frito') || platoLower.includes('azúcar')) {
      return { status: 'Alerta Nutricional', color: '#ff4d4d' }; // Rojo
    }
    if (platoLower.includes('verdura') || platoLower.includes('legumbre')) {
      return { status: 'Nutricionalmente Óptimo', color: '#4CAF50' }; // Verde
    }
    return { status: 'Aceptable', color: '#ffcc00' }; // Amarillo
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenu({ ...menu, [name]: value });
    
    if (name === 'platillo') {
      const result = validateMenu(value);
      setValidationStatus(result);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Menú para ${menu.dia} guardado. Estado: ${validationStatus ? validationStatus.status : 'Sin evaluar'}`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Gestión del Menú Semanal</h2>
      <p>Módulo de actualización de menú, incluyendo validación nutricional.</p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <label>Día de la Semana:</label>
        <select name="dia" value={menu.dia} onChange={handleChange} style={styles.input}>
          <option value="Lunes">Lunes</option>
          <option value="Martes">Martes</option>
          <option value="Miércoles">Miércoles</option>
          <option value="Jueves">Jueves</option>
          <option value="Viernes">Viernes</option>
        </select>

        <label>Platillo Principal:</label>
        <input 
          type="text"
          name="platillo"
          value={menu.platillo}
          onChange={handleChange}
          style={styles.input}
          placeholder="Ej: Pollo con verduras"
        />

        {validationStatus && (
          <div style={{ padding: '10px', backgroundColor: validationStatus.color, color: 'white', borderRadius: '5px', fontWeight: 'bold' }}>
            Estado de Nutrición: {validationStatus.status}
          </div>
        )}

        <label>Fruta:</label>
        <input 
          type="text"
          name="fruta"
          value={menu.fruta}
          onChange={handleChange}
          style={styles.input}
          placeholder="Ej: Manzana"
        />

        <label>Bebida:</label>
        <input 
          type="text"
          name="bebida"
          value={menu.bebida}
          onChange={handleChange}
          style={styles.input}
          placeholder="Ej: Agua natural"
        />

        <button type="submit" style={styles.button}>
          Guardar Menú
        </button>
      </form>
    </div>
  );
};

const styles = {
    input: { padding: '10px', border: '1px solid #ccc', borderRadius: '4px' },
    button: { padding: '10px 15px', backgroundColor: '#3f51b5', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default MenuSelectionPage;