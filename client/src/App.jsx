import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import ProductCard from './components/card/ProductCard.jsx';
import './App.css';

function App() {
  const [carrito, setCarrito] = useState([]);

  const productos = [
    {
      id: 1,
      imagen: 'https://via.placeholder.com/200',
      descripcion: 'Audífonos Bluetooth',
      precioDetalle: 30000,
      precioMayor: 25000
    },
    {
      id: 2,
      imagen: 'https://via.placeholder.com/200',
      descripcion: 'Mouse Gamer',
      precioDetalle: 15000,
      precioMayor: 12000
    },
    // agrega más productos si quieres
  ];

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const enviarPorWhatsApp = () => {
    if (carrito.length === 0) return;

    const mensaje = carrito.map((p, i) =>
      `${i + 1}. ${p.descripcion} - $${p.precioDetalle}`
    ).join('\n');

    const numero = '56976823882'; // tu número sin +, con código país
    const url = `https://wa.me/${numero}?text=${encodeURIComponent("Hola, quiero cotizar los siguientes productos:\n\n" + mensaje)}`;

    window.open(url, '_blank');
  };

  return (
    <div>
      <Navbar />
      <div className="product-grid">
        {productos.map(producto => (
          <ProductCard key={producto.id} producto={producto} onAgregar={agregarAlCarrito} />
        ))}
      </div>

      {carrito.length > 0 && (
        <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
          <button onClick={enviarPorWhatsApp} style={{
            backgroundColor: '#25D366',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '10px',
            fontSize: '16px',
            cursor: 'pointer'
          }}>
            Enviar por WhatsApp ({carrito.length})
          </button>
        </div>
      )}
    </div>
  );
}

export default App;