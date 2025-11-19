import React from 'react';

const mockMenuData = [
  { dia: 'Lunes 🍗', descripcion: 'Pollo con verduras.' },
  { dia: 'Martes 🍝', descripcion: 'Espagueti con queso.' },
  { dia: 'Miércoles 🥗', descripcion: 'Ensalada fresca con agua de horchata.' },
  { dia: 'Jueves 🌮', descripcion: 'Tacos de barbacoa.' },
  { dia: 'Viernes 🥪', descripcion: 'Sándwiches con fruta de temporada.' },
];

const Menu = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 text-center mb-4">
          <h2 className="text-primary fw-bold">Menú Semanal - Desayunos</h2>
          <p className="lead text-muted">
            Semana del 10 al 14 de Marzo. ¡Elige con amor!
          </p>
          <hr />
        </div>
      </div>
      
      <div className="row">
        {mockMenuData.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm h-100 border-success">
              <div className="card-body">
                <h5 className="card-title text-success">{item.dia}</h5>
                <p className="card-text">{item.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <div className="alert alert-info" role="alert">
            <strong>Nota Importante:</strong> Como padre, puedes decidir si proporcionarle o no estos alimentos a tu hijo ese día.
          </div>
        </div>
      </div>
    </div>
  );
};



export default Menu;
