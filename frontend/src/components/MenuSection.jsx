import React from 'react';
import MenuCard from './MenuCard.jsx';

const CATEGORY_TABS = [
  { cat: 'all', label: 'All Items', id: 'tabAll' },
  { cat: 'food', label: 'Food', id: 'tabFood' },
  { cat: 'beverages', label: 'Beverages', id: 'tabBeverages' },
  { cat: 'snacks', label: 'Snacks', id: 'tabSnacks' },
  { cat: 'breakfast', label: 'Breakfast', id: 'tabBreakfast' },
  { cat: 'lunch', label: 'Lunch', id: 'tabLunch' },
  { cat: 'dinner', label: 'Dinner', id: 'tabDinner' },
];

export default function MenuSection({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  items,
  cart,
  selectedVariants,
  onAddToCart,
  onChangeQty,
  onOpenVariantDrawer,
  isAdmin,
  onEdit,
  onDelete,
  reviews = [],
  onOpenReviews
}) {
  return (
    <section className="categories-section" id="menu">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Our Menu</span>
          <h2 className="section-title">What Would You Like Today?</h2>
          <p className="section-sub">Fresh, tasty &amp; affordable – pick your favourite!</p>
        </div>

        <div className="search-bar-wrapper reveal">
          <svg className="search-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input
            type="text"
            className="search-bar"
            id="searchBar"
            placeholder="Search food, drinks, services..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="category-tabs reveal" id="categoryTabs">
          {CATEGORY_TABS.map(tab => (
            <button
              key={tab.cat}
              className={`tab-btn${activeCategory === tab.cat ? ' active' : ''}`}
              data-cat={tab.cat}
              id={tab.id}
              onClick={() => setActiveCategory(tab.cat)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="menu-grid" id="menuGrid">
          {items.map((item, idx) => (
            <MenuCard
              key={item.id}
              item={item}
              idx={idx}
              cart={cart}
              selectedVariants={selectedVariants}
              onAddToCart={onAddToCart}
              onChangeQty={onChangeQty}
              onOpenVariantDrawer={onOpenVariantDrawer}
              isAdmin={isAdmin}
              onEdit={onEdit}
              onDelete={onDelete}
              reviews={reviews}
              onOpenReviews={onOpenReviews}
            />
          ))}
        </div>

        <div className={`empty-state${items.length === 0 ? '' : ' hidden'}`} id="emptyState">
          <img src="samosa.jpg" alt="Not found" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%', opacity: 0.4 }} />
          <p>No items found. Try a different search!</p>
        </div>
      </div>
    </section>
  );
}
