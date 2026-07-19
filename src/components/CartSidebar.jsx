import React from 'react';
import { formatPrice } from '../data/menuData.js';

export default function CartSidebar({ cart, isOpen, onClose, onChangeQty, onRemove, onPlaceOrder, onClear }) {
  const totalAmt = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <>
      <div className={`cart-overlay${isOpen ? ' active' : ''}`} id="cartOverlay" onClick={onClose}></div>
      <aside className={`cart-sidebar${isOpen ? ' open' : ''}`} id="cartSidebar">
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="cart-close" id="cartClose" aria-label="Close cart" onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div className="cart-body" id="cartBody">
          <div className="cart-empty" id="cartEmpty" style={{ display: cart.length === 0 ? 'block' : 'none' }}>
            <img src="samosa.jpg" alt="Empty cart" className="cart-empty-img" />
            <p>Your cart is empty</p>
            <small>Add items from the menu to get started!</small>
          </div>
          <ul className="cart-list" id="cartList">
            {cart.map(item => (
              <li className="cart-item" key={item.id}>
                <img
                  className="cart-item-img"
                  src={item.img}
                  alt={item.name}
                  onError={e => { e.target.style.background = 'var(--bg3)'; e.target.src = ''; }}
                />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">{formatPrice(item.price)} × {item.qty} = {formatPrice(item.price * item.qty)}</div>
                </div>
                <div className="cart-item-qty">
                  <button className="cart-qty-btn" onClick={() => onChangeQty(item.id, -1)}>−</button>
                  <span className="cart-qty-num">{item.qty}</span>
                  <button className="cart-qty-btn" onClick={() => onChangeQty(item.id, 1)}>+</button>
                </div>
                <button className="cart-item-del" onClick={() => onRemove(item.id)} title="Remove">✕</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="cart-footer" id="cartFooter" style={{ display: cart.length === 0 ? 'none' : 'flex' }}>
          <div className="cart-total-row">
            <span>Subtotal</span>
            <span id="cartSubtotal">{formatPrice(totalAmt)}</span>
          </div>
          <div className="cart-total-row total">
            <span>Total</span>
            <span id="cartTotal">{formatPrice(totalAmt)}</span>
          </div>
          <button className="btn btn-primary full-width" id="placeOrderBtn" onClick={onPlaceOrder}>Place Order</button>
          <button className="btn btn-ghost full-width" id="clearCartBtn" onClick={onClear}>Clear Cart</button>
        </div>
      </aside>
    </>
  );
}
