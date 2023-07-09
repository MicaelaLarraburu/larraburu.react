import React from 'react';

const CartWidget = () => {
    const itemCount = 1; // Número fijo para la notificación
  
    return (
      <div className="cart-widget">
           <img src="./public/descarga.jpg" alt="Carrito de compras" />
        {itemCount > 0 && <span className="item-count">{itemCount}</span>} {/* Notificación con el número fijo */}
      </div>
    );
  };
  
  export default CartWidget;