import React, { useState, useEffect } from 'react';

export default function AdminProductModal({ isOpen, onClose, onSave, product }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('food');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [veg, setVeg] = useState(true);
  const [img, setImg] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (product) {
      setName(product.name || '');
      setCategory(product.category || 'food');
      setPrice(product.price || '');
      setDesc(product.desc || '');
      setVeg(product.veg !== undefined ? product.veg : true);
      setImg(product.img || '');
    } else {
      setName('');
      setCategory('food');
      setPrice('');
      setDesc('');
      setVeg(true);
      setImg('');
    }
    setError('');
  }, [product, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name || !price || !desc) {
      setError('Please fill in all required fields.');
      return;
    }

    const priceNum = parseFloat(price);
    if (isNaN(priceNum) || priceNum <= 0) {
      setError('Please enter a valid price.');
      return;
    }

    let imageFile = img.trim();
    if (!imageFile) {
      imageFile = category === 'beverages' ? 'Tea.jpg' : 'samosa.jpg';
    }

    onSave({
      id: product ? product.id : Date.now(),
      name,
      category,
      price: priceNum,
      desc,
      veg,
      img: imageFile
    });

    onClose();
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal-card" onClick={e => e.stopPropagation()}>
        <button className="auth-modal-close" onClick={onClose}>&times;</button>
        <h3>{product ? 'Edit Product' : 'Add New Product'}</h3>
        
        {error && <div className="auth-error-msg">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-form-group">
            <label>Product Name *</label>
            <input 
              type="text" 
              placeholder="e.g. Veg Burger" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              required 
            />
          </div>

          <div className="auth-form-group">
            <label>Category *</label>
            <select value={category} onChange={e => setCategory(e.target.value)}>
              <option value="food">Food</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
          </div>

          <div className="auth-form-group">
            <label>Price (₹) *</label>
            <input 
              type="number" 
              placeholder="e.g. 50" 
              value={price} 
              onChange={e => setPrice(e.target.value)} 
              required 
            />
          </div>

          <div className="auth-form-group">
            <label>Description *</label>
            <textarea 
              placeholder="Enter product description" 
              value={desc} 
              onChange={e => setDesc(e.target.value)} 
              rows="3"
              required
            ></textarea>
          </div>

          <div className="auth-form-group">
            <label>Image Filename / URL</label>
            <input 
              type="text" 
              placeholder="e.g. samosa.jpg (or leave blank for default)" 
              value={img} 
              onChange={e => setImg(e.target.value)} 
            />
          </div>

          <div className="auth-form-group-checkbox">
            <label className="checkbox-container">
              <input 
                type="checkbox" 
                checked={veg} 
                onChange={e => setVeg(e.target.checked)} 
              />
              <span className="checkmark"></span>
              Is Vegetarian
            </label>
          </div>

          <button type="submit" className="btn btn-primary full-width">
            {product ? 'Save Changes' : 'Add Product'}
          </button>
        </form>
      </div>
    </div>
  );
}
