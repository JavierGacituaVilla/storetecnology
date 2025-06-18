import React from 'react';
import './ProductCard.css';

const ProductCard = ({ producto, onAgregar }) => {
  return (
    <div className="product-card">
      <img src={producto.imagen} alt={producto.descripcion} className="product-image" />
      <div className="product-info">
        <p className="product-description">{producto.descripcion}</p>
        <p className="product-precio">Precio Detalle: ${producto.precioDetalle}</p>
        <p className="product-precio-mayor">Precio Por Mayor: ${producto.precioMayor}</p>
        <button className="btn-agregar" onClick={() => onAgregar(producto)}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductCard;
