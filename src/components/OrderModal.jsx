import React, { useState, useEffect, useRef } from 'react';
import { formatPrice } from '../data/menuData.js';

export default function OrderModal({ isOpen, onClose, cart = [], onConfirm }) {
  const [step, setStep] = useState(1);
  const [orderType, setOrderType] = useState('pickup');
  const [hostel, setHostel] = useState('Boys Hostel');
  const [roomNumber, setRoomNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  
  
  const [upiTimer, setUpiTimer] = useState(120);
  const [paymentStatus, setPaymentStatus] = useState('pending'); 
  const [generatedOrderId, setGeneratedOrderId] = useState('');
  const timerRef = useRef(null);

  const totalAmt = cart.reduce((s, i) => s + i.price * i.qty, 0);

  useEffect(() => {
    if (!isOpen) {
      
      setStep(1);
      setOrderType('pickup');
      setHostel('Boys Hostel');
      setRoomNumber('');
      setPaymentMethod('upi');
      setPaymentStatus('pending');
      setUpiTimer(120);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }, [isOpen]);

  useEffect(() => {
    if (step === 2 && paymentMethod === 'upi' && paymentStatus === 'pending') {
      setUpiTimer(120);
      timerRef.current = setInterval(() => {
        setUpiTimer(t => {
          if (t <= 1) {
            clearInterval(timerRef.current);
            setPaymentStatus('failed');
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [step, paymentMethod, paymentStatus]);

  if (!isOpen) return null;

  const handleNextStep = () => {
    if (step === 1) {
      if (orderType === 'delivery' && !roomNumber.trim()) {
        alert('Please enter your room number.');
        return;
      }
      setStep(2);
    }
  };

  const handleSimulatePayment = (success) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (success) {
      setPaymentStatus('success');
      const orderId = 'CB-' + Math.floor(100000 + Math.random() * 900000);
      setGeneratedOrderId(orderId);
      
      
      onConfirm({
        id: orderId,
        orderType,
        hostel: orderType === 'delivery' ? hostel : '',
        roomNumber: orderType === 'delivery' ? roomNumber : '',
        paymentMethod,
        totalPrice: totalAmt,
        items: [...cart],
        timestamp: new Date().toISOString(),
        status: 'Pending'
      });
      
      setStep(3);
    } else {
      setPaymentStatus('failed');
    }
  };

  const handlePlaceCOD = () => {
    const orderId = 'CB-' + Math.floor(100000 + Math.random() * 900000);
    setGeneratedOrderId(orderId);
    
    onConfirm({
      id: orderId,
      orderType,
      hostel: orderType === 'delivery' ? hostel : '',
      roomNumber: orderType === 'delivery' ? roomNumber : '',
      paymentMethod,
      totalPrice: totalAmt,
      items: [...cart],
      timestamp: new Date().toISOString(),
      status: 'Pending'
    });
    
    setStep(3);
  };

  const formatTimer = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="checkout-modal-card" onClick={e => e.stopPropagation()}>
        <div className="checkout-header">
          <h3>Checkout</h3>
          <button className="checkout-close" onClick={onClose}>&times;</button>
        </div>

        {step < 3 && (
          <div className="checkout-steps-nav">
            <div className={`checkout-step-tab ${step === 1 ? 'active' : ''}`}>1. Details</div>
            <div className={`checkout-step-tab ${step === 2 ? 'active' : ''}`}>2. Payment</div>
          </div>
        )}

        <div className="checkout-body">
          {step === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div className="fulfillment-toggle">
                <button
                  type="button"
                  className={`fulfillment-btn ${orderType === 'pickup' ? 'active' : ''}`}
                  onClick={() => setOrderType('pickup')}
                >
                  🏪 Counter Pickup
                </button>
                <button
                  type="button"
                  className={`fulfillment-btn ${orderType === 'delivery' ? 'active' : ''}`}
                  onClick={() => setOrderType('delivery')}
                >
                  🚀 Hostel Delivery
                </button>
              </div>

              {orderType === 'delivery' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div className="x-form-group">
                    <label>Select Hostel</label>
                    <select
                      className="x-select"
                      value={hostel}
                      onChange={e => setHostel(e.target.value)}
                    >
                      <option value="Boys Hostel">Boys Hostel</option>
                      <option value="Girls Hostel">Girls Hostel</option>
                    </select>
                  </div>
                  
                  <div className="x-form-group">
                    <label>Room Number</label>
                    <input
                      type="text"
                      className="x-input"
                      placeholder="e.g. 104, 302-B"
                      value={roomNumber}
                      onChange={e => setRoomNumber(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}

              <div style={{ background: 'var(--bg3)', padding: '15px', borderRadius: 'var(--radius-lg)', marginTop: '10px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px', color: 'var(--text-muted)' }}>Order Summary</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', fontWeight: 800 }}>
                  <span>Total Amount:</span>
                  <span style={{ color: 'var(--primary)' }}>{formatPrice(totalAmt)}</span>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              {paymentStatus === 'pending' ? (
                <div>
                  <div className="payment-methods-grid">
                    <div
                      className={`payment-method-option ${paymentMethod === 'upi' ? 'selected' : ''}`}
                      onClick={() => setPaymentMethod('upi')}
                    >
                      <input
                        type="radio"
                        checked={paymentMethod === 'upi'}
                        onChange={() => setPaymentMethod('upi')}
                      />
                      <div className="payment-option-details">
                        <span className="payment-option-title">Simulated UPI QR Code</span>
                        <span className="payment-option-desc">Scan and pay instantly from your mobile</span>
                      </div>
                    </div>

                    <div
                      className={`payment-method-option ${paymentMethod === 'cod' ? 'selected' : ''}`}
                      onClick={() => setPaymentMethod('cod')}
                    >
                      <input
                        type="radio"
                        checked={paymentMethod === 'cod'}
                        onChange={() => setPaymentMethod('cod')}
                      />
                      <div className="payment-option-details">
                        <span className="payment-option-title">
                          {orderType === 'delivery' ? 'Cash on Delivery (COD)' : 'Pay at Counter'}
                        </span>
                        <span className="payment-option-desc">Pay when you receive your order</span>
                      </div>
                    </div>
                  </div>

                  {paymentMethod === 'upi' && (
                    <div className="upi-simulator-view">
                      <div className="upi-qr-wrapper">
                        <div className="upi-qr-placeholder"></div>
                      </div>
                      <div className="upi-timer-badge">
                        ⏱ Expires in: {formatTimer(upiTimer)}
                      </div>
                      <p className="upi-instructions">
                        In a real application, scan this QR code with any UPI app (GPay, PhonePe, Paytm). Click <strong>Simulate Success</strong> to complete ordering.
                      </p>
                      <div className="upi-simulator-controls">
                        <button
                          className="btn btn-ghost upi-sim-btn"
                          onClick={() => handleSimulatePayment(false)}
                        >
                          Simulate Fail
                        </button>
                        <button
                          className="btn btn-primary upi-sim-btn"
                          onClick={() => handleSimulatePayment(true)}
                        >
                          Simulate Success
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{ fontSize: '48px', color: 'var(--red)', marginBottom: '15px' }}>✕</div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>Payment Failed!</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px' }}>
                    The transaction was either cancelled or timed out. Please try again.
                  </p>
                  <button className="btn btn-primary" onClick={() => setPaymentStatus('pending')}>
                    Try Again
                  </button>
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="order-success-screen">
              <div className="order-check">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 800 }}>Order Confirmed!</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', maxWidth: '340px' }}>
                Your order has been received and added to your tracking log. Canteen staff is starting preparation.
              </p>

              <div className="order-success-meta">
                <div className="order-success-meta-row">
                  <span>Order ID:</span>
                  <strong>#{generatedOrderId.slice(-6).toUpperCase()}</strong>
                </div>
                <div className="order-success-meta-row">
                  <span>Fulfillment:</span>
                  <strong>{orderType === 'delivery' ? `Hostel Delivery (${hostel}, Room ${roomNumber})` : 'Self Counter Pickup'}</strong>
                </div>
                <div className="order-success-meta-row">
                  <span>Est. Time:</span>
                  <strong>10–15 Minutes</strong>
                </div>
                <div className="order-success-meta-row">
                  <span>Total Amount Paid:</span>
                  <strong style={{ color: 'var(--primary)' }}>{formatPrice(totalAmt)}</strong>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="checkout-footer">
          {step === 1 && (
            <>
              <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
              <button className="btn btn-primary" onClick={handleNextStep}>Next: Payment</button>
            </>
          )}

          {step === 2 && paymentMethod === 'cod' && paymentStatus === 'pending' && (
            <>
              <button className="btn btn-ghost" onClick={() => setStep(1)}>Back</button>
              <button className="btn btn-primary" onClick={handlePlaceCOD}>Place Order</button>
            </>
          )}

          {step === 2 && paymentMethod === 'upi' && paymentStatus === 'pending' && (
            <button className="btn btn-ghost" onClick={() => setStep(1)}>Back</button>
          )}

          {step === 3 && (
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={onClose}>
              Awesome!
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
