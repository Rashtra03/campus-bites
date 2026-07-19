export const MENU_ITEMS = [
  { id: 1, name: 'BreakFast', img: 'breakfast.jpg', category: 'breakfast', price: 40, desc: 'A delicious and satisfying Chola Bhature to start your day', veg: true },
  { id: 2, name: 'Lunch', img: 'Lunch.jpg', category: 'Lunch', price: 40, desc: 'A delicious and satisfying Lunch to have your lunch', veg: true },
  { id: 3, name: 'Dinner', img: 'Dinner.jpg', category: 'Dinner', price: 40, desc: 'A delicious and satisfying Dinner to have your dinner', veg: true },
  { id: 4, name: 'Veg Noodles', img: 'Veg Noodles.jpg', category: 'food', price: 40, desc: 'Spicy stir-fried noodles with veggies & sauce', veg: true },
  { id: 5, name: 'Veg Momo', img: 'Veg momo.jpg', category: 'food', price: 50, desc: 'Steamed dumplings stuffed with paneer & veggies', veg: true },
  { id: 6, name: 'Veg Roll', img: 'Veg  Roll.jpg', category: 'food', price: 25, desc: 'Crispy paratha roll stuffed with spiced paneer & veggies', veg: true },
  { id: 7, name: 'Egg Roll', img: 'Egg Roll.jpg', category: 'food', price: 45, desc: 'Soft paratha roll with egg, onion & tangy chutney', veg: false },
  { id: 8, name: 'Samosa', img: 'samosa.jpg', category: 'food', price: 10, desc: 'Golden crispy samosa with spiced potato filling', veg: true },
  { id: 9, name: 'Dosa', img: 'Dosa.jpg', category: 'food', price: 50, desc: 'Crispy South Indian dosa with coconut chutney & sambar', veg: true },
  { id: 10, name: 'Tea', img: 'Tea.jpg', category: 'beverages', price: 10, desc: 'Hot refreshing masala chai to keep you going', veg: true },
  { id: 11, name: 'Coffee', img: 'Coffee.jpg', category: 'beverages', price: 13, desc: 'Rich, aromatic Nescafé coffee to fuel your day', veg: true },
  { id: 12, name: 'Water Bottle', img: 'Water bottle.jpg', category: 'beverages', price: 20, desc: '500ml / 1-litre sealed mineral water bottle', veg: true },
  { id: 13, name: 'Cold Drink', img: 'Cold Drink.jpg', category: 'beverages', price: 25, desc: 'Chilled cold drink - customize your brand and flavour!', veg: true },
  { id: 14, name: 'Ice Cream', img: 'ICE CREAM.jpg', category: 'beverages', price: 30, desc: 'Delicious scoops, cups & cones - pick your flavour!', veg: true },
  { id: 15, name: 'Snacks', img: 'chips.jpg', category: 'snacks', price: 10, desc: 'Crunchy salted or masala flavoured snacks packet', veg: true },
  { id: 16, name: 'Biscuits', img: 'Biscuits.jpg', category: 'snacks', price: 10, desc: 'Assorted biscuit pack - pick your favorite variant!', veg: true }
];

export const ITEM_VARIANTS = {
  13: {
    title: 'Choose Flavour',
    desc: 'Select brand & size',
    brands: ['All', 'Coca-Cola', 'Pepsi', 'Sprite', 'Thums Up', 'Fanta', 'Limca', 'Mountain Dew', '7UP'],
    items: [
      { id: 'cd_coke_250', brand: 'Coca-Cola', name: 'Coca-Cola 250ml', price: 25, mrp: 30, img: 'coca-cola.jpg' },
      { id: 'cd_coke_500', brand: 'Coca-Cola', name: 'Coca-Cola 500ml', price: 45, mrp: 50, img: 'coca-cola.jpg' },
      { id: 'cd_sprite_500', brand: 'Sprite', name: 'Sprite 500ml', price: 45, mrp: 50, img: 'sprite.jpg' },
      { id: 'cd_lahori_zeera_250', brand: 'lahori', name: 'lahori zeera 250ml', price: 10, mrp: 15, img: 'lahori zeera.jpg' },
      { id: 'cd_maaza_250', brand: 'maaza', name: 'maaza 250ml', price: 10, mrp: 15, img: 'maaza.jpg' },
      { id: 'cd_campa_250', brand: 'campa', name: 'campa 250ml', price: 10, mrp: 15, img: 'Campa.jpg' },
      { id: 'cd_campa_500', brand: 'campa', name: 'campa 500ml', price: 20, mrp: 25, img: 'Campa.jpg' },
      { id: 'cd_fanta_250', brand: 'Fanta', name: 'Fanta Orange 250ml', price: 25, mrp: 30, img: 'fanta.jpg' },
      { id: 'cd_7up_250', brand: '7UP', name: '7UP 250ml', price: 25, mrp: 30, img: '7up.jpg' }
    ]
  },
  14: {
    title: 'Choose Flavour',
    desc: 'Select scoop, cone or pack',
    brands: ['All', 'Cone', 'Cup', 'Family Pack'],
    items: [
      { id: 'ic_vanilla_cone', brand: 'Cone', name: 'Vanilla Cone', price: 30, mrp: 35, img: 'ICE CREAM.jpg' },
      { id: 'ic_choco_cone', brand: 'Cone', name: 'Chocolate Cone', price: 35, mrp: 40, img: 'ICE CREAM.jpg' },
      { id: 'ic_strawberry_cone', brand: 'Cone', name: 'Strawberry Cone', price: 35, mrp: 40, img: 'ICE CREAM.jpg' },
      { id: 'ic_butter_cone', brand: 'Cone', name: 'Butterscotch Cone', price: 40, mrp: 45, img: 'ICE CREAM.jpg' },
      { id: 'ic_mango_cone', brand: 'Cone', name: 'Mango Cone', price: 40, mrp: 45, img: 'ICE CREAM.jpg' },
      { id: 'ic_blackcurrant_cone', brand: 'Cone', name: 'Black Currant Cone', price: 45, mrp: 50, img: 'ICE CREAM.jpg' },
      { id: 'ic_choco_cup', brand: 'Cup', name: 'Chocolate Cup', price: 50, mrp: 55, img: 'ICE CREAM.jpg' },
      { id: 'ic_vanilla_cup', brand: 'Cup', name: 'Vanilla Cup', price: 45, mrp: 50, img: 'ICE CREAM.jpg' },
      { id: 'ic_family_500', brand: 'Family Pack', name: 'Family Pack 500ml', price: 120, mrp: 140, img: 'ICE CREAM.jpg' },
      { id: 'ic_family_1l', brand: 'Family Pack', name: 'Family Pack 1L', price: 220, mrp: 250, img: 'ICE CREAM.jpg' }
    ]
  },
  15: {
    title: 'Choose Flavour',
    desc: 'Select brand & size',
    brands: ['All', "Lay's", 'Kurkure', 'Panjabi tadka'],
    items: [
      { id: 'ch_Lays_10', brand: "Lay's", name: 'Classic Salted ₹10', price: 10, mrp: 12, img: 'Lays.jpg' },
      { id: 'ch_Kurkure_10', brand: 'Kurkure', name: 'Masala Munch ₹10', price: 10, mrp: 12, img: 'Kurkure.jpg' },
      { id: 'ch_Panjabi_tadka_10', brand: 'Panjabi tadka', name: 'Panjabi tadka ₹10', price: 10, mrp: 12, img: 'Panjabi tadka.jpg' }
    ]
  },
  16: {
    title: 'Choose Variant',
    desc: 'Select brand & size',
    brands: ['All', 'Parle-G', 'Marie Gold', 'Bourbon', 'Good Day', 'Treat'],
    items: [
      { id: 'bi_parle_small', brand: 'Parle-G', name: 'Parle-G Small ₹5', price: 5, mrp: 6, img: 'Biscuits.jpg' },
      { id: 'bi_parle_med', brand: 'Parle-G', name: 'Parle-G Medium ₹10', price: 10, mrp: 12, img: 'Biscuits.jpg' },
      { id: 'bi_parle_family', brand: 'Parle-G', name: 'Parle-G Family Pack ₹25', price: 25, mrp: 30, img: 'Biscuits.jpg' },
      { id: 'bi_marie_small', brand: 'Marie Gold', name: 'Marie Gold Small ₹10', price: 10, mrp: 12, img: 'Biscuits.jpg' },
      { id: 'bi_marie_large', brand: 'Marie Gold', name: 'Marie Gold Large ₹30', price: 30, mrp: 35, img: 'Biscuits.jpg' },
      { id: 'bi_bourbon_reg', brand: 'Bourbon', name: 'Bourbon Regular ₹20', price: 20, mrp: 25, img: 'Biscuits.jpg' },
      { id: 'bi_bourbon_large', brand: 'Bourbon', name: 'Bourbon Large ₹40', price: 40, mrp: 45, img: 'Biscuits.jpg' },
      { id: 'bi_goodday_butter', brand: 'Good Day', name: 'Good Day Butter ₹10', price: 10, mrp: 12, img: 'Biscuits.jpg' },
      { id: 'bi_goodday_cashew', brand: 'Good Day', name: 'Cashew Good Day ₹20', price: 20, mrp: 25, img: 'Biscuits.jpg' },
      { id: 'bi_goodday_choco', brand: 'Good Day', name: 'Choco Chip Good Day ₹25', price: 25, mrp: 30, img: 'Biscuits.jpg' },
      { id: 'bi_treat_choco', brand: 'Treat', name: 'Treat Chocolate ₹10', price: 10, mrp: 12, img: 'Biscuits.jpg' },
      { id: 'bi_treat_straw', brand: 'Treat', name: 'Treat Strawberry ₹10', price: 10, mrp: 12, img: 'Biscuits.jpg' }
    ]
  },
  1: {
    title: 'Choose More Delicacies',
    desc: 'Fresh and Healthy Delicacies',
    brands: ['All', 'Sandwich', 'Poha', 'Paratha', 'Beverages'],
    items: [
      { id: 'bf_veg_sandwich', brand: 'SUNDAY', name: 'Veg Sandwich', price: 50, mrp: 60, img: 'breakfast.jpg' },
      { id: 'bf_grilled_sandwich', brand: 'MONDAY', name: 'Grilled Sandwich', price: 70, mrp: 80, img: 'breakfast.jpg' },
      { id: 'bf_poha', brand: 'TUESDAY', name: 'Poha', price: 40, mrp: 50, img: 'breakfast.jpg' },
      { id: 'bf_upma', brand: 'WEDNESDAY', name: 'Upma', price: 45, mrp: 55, img: 'breakfast.jpg' },
      { id: 'bf_aloo_paratha', brand: 'THURSDAY', name: 'Aloo Paratha', price: 60, mrp: 70, img: 'breakfast.jpg' },
      { id: 'bf_paneer_paratha', brand: 'FRIDAY', name: 'Paneer Paratha', price: 80, mrp: 90, img: 'breakfast.jpg' },
      { id: 'bf_masala_chai', brand: 'SATURDAY', name: 'Masala Chai', price: 20, mrp: 25, img: 'breakfast.jpg' }
    ]
  }
};

export const FEATURED = [
  { name: 'Veg Noodles', img: 'Veg Noodles.jpg', price: '₹40', id: 4 },
  { name: 'Veg Momo', img: 'Veg momo.jpg', price: '₹50', id: 5 },
  { name: 'Dosa', img: 'Dosa.jpg', price: '₹50', id: 9 },
  { name: 'Coffee', img: 'Coffee.jpg', price: '₹13', id: 11 },
  { name: 'Egg Roll', img: 'Egg Roll.jpg', price: '₹45', id: 7 }
];

export function formatPrice(n) {
  return `₹${Number(n).toLocaleString('en-IN')}`;
}
