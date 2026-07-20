import React from 'react';
import { formatPrice } from '../data/menuData.js';

export default function VariantDrawer({
  activeDrawerProductId,
  varData,
  drawerSearchQuery,
  setDrawerSearchQuery,
  drawerActiveBrand,
  setDrawerActiveBrand,
  cart,
  onAdd,
  onChangeQty,
  onClose,
}) {
  const isOpen = !!activeDrawerProductId && !!varData;

  let filtered = [];
  let totalAmt = 0;

  if (varData) {
    const query = drawerSearchQuery.toLowerCase();
    filtered = varData.items.filter(item => {
      const matchesBrand = drawerActiveBrand === 'All' || item.brand === drawerActiveBrand;
      const matchesSearch = item.name.toLowerCase().includes(query) || item.brand.toLowerCase().includes(query);
      return matchesBrand && matchesSearch;
    });

    const variantIds = varData.items.map(v => v.id);
    totalAmt = cart
      .filter(c => variantIds.includes(c.id))
      .reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  return (
    <>
      <div className={`drawer-overlay${isOpen ? ' active' : ''}`} id="variantOverlay" onClick={onClose}></div>
      <aside className={`variant-sidebar${isOpen ? ' open' : ''}`} id="variantDrawer">
        <div className="variant-drawer-header">
          <div className="variant-drawer-title-wrap">
            <h3 id="drawerProductName">{varData ? varData.title : 'Choose Flavour'}</h3>
            <p id="drawerProductDesc">{varData ? varData.desc : 'Select your preferred variant below'}</p>
          </div>
          <button className="drawer-close-btn" id="variantClose" aria-label="Close drawer" onClick={onClose}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div className="drawer-search-row">
          <div className="drawer-search-box">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input
              type="text"
              id="drawerSearch"
              placeholder="Search variant/flavour..."
              value={drawerSearchQuery}
              onChange={e => setDrawerSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="drawer-brand-row" id="drawerBrandTabs" style={{ display: varData && varData.brands && varData.brands.length > 1 ? 'flex' : 'none' }}>
          {varData && varData.brands && varData.brands.map(brand => (
            <button
              key={brand}
              className={`drawer-brand-tab-btn${brand === drawerActiveBrand ? ' active' : ''}`}
              onClick={() => setDrawerActiveBrand(brand)}
              id={`brand-tab-${brand.replace(/\s/g, '-')}`}
            >
              {brand}
            </button>
          ))}
        </div>

        <div className="drawer-scroll-body" id="drawerBody">
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
              <p>No variants found matching filter</p>
            </div>
          ) : (
            filtered.map(item => {
              const cartItem = cart.find(c => c.id === item.id);
              const qtyInCart = cartItem ? cartItem.qty : 0;
              return (
                <div className="drawer-variant-card" key={item.id}>
                  <img
                    className="drawer-var-img"
                    src={item.img}
                    alt={item.name}
                    onError={e => { e.target.style.display = 'none'; }}
                  />
                  <div className="drawer-var-info">
                    <span className="drawer-var-brand">{item.brand}</span>
                    <span className="drawer-var-name" title={item.name}>{item.name}</span>
                    <div className="drawer-var-pricing">
                      <span className="drawer-var-price">{formatPrice(item.price)}</span>
                      {item.mrp > item.price && <span className="drawer-var-mrp">{formatPrice(item.mrp)}</span>}
                    </div>
                  </div>
                  <div className="drawer-add-btn-container">
                    {qtyInCart > 0 ? (
                      <div className="drawer-qty-selector">
                        <button className="drawer-qty-btn" onClick={() => onChangeQty(item.id, -1)}>−</button>
                        <span className="drawer-qty-num">{qtyInCart}</span>
                        <button className="drawer-qty-btn" onClick={() => onChangeQty(item.id, 1)}>+</button>
                      </div>
                    ) : (
                      <button className="drawer-add-action-btn" onClick={() => onAdd(item.id)}>
                        + Add
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="drawer-footer-strip" id="drawerFooter">
          <div className="drawer-total-info">
            <span className="drawer-total-label">Subtotal</span>
            <span className="drawer-total-price" id="drawerTotalPrice">{formatPrice(totalAmt)}</span>
          </div>
          <button className="btn btn-primary" id="drawerDoneBtn" onClick={onClose}>Done</button>
        </div>
      </aside>
    </>
  );
}
