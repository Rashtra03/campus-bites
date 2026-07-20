import json
from database import SessionLocal, engine
import models

models.Base.metadata.create_all(bind=engine)
db = SessionLocal()

MENU_ITEMS = [
  { "id": 1, "name": "BreakFast", "img": "breakfast.jpg", "category": "breakfast", "price": 40, "desc": "A delicious and satisfying Chola Bhature to start your day", "veg": True },
  { "id": 2, "name": "Lunch", "img": "Lunch.jpg", "category": "Lunch", "price": 40, "desc": "A delicious and satisfying Lunch to have your lunch", "veg": True },
  { "id": 3, "name": "Dinner", "img": "Dinner.jpg", "category": "Dinner", "price": 40, "desc": "A delicious and satisfying Dinner to have your dinner", "veg": True },
  { "id": 4, "name": "Veg Noodles", "img": "Veg Noodles.jpg", "category": "food", "price": 40, "desc": "Spicy stir-fried noodles with veggies & sauce", "veg": True },
  { "id": 5, "name": "Veg Momo", "img": "Veg momo.jpg", "category": "food", "price": 50, "desc": "Steamed dumplings stuffed with paneer & veggies", "veg": True },
  { "id": 6, "name": "Veg Roll", "img": "Veg  Roll.jpg", "category": "food", "price": 25, "desc": "Crispy paratha roll stuffed with spiced paneer & veggies", "veg": True },
  { "id": 7, "name": "Egg Roll", "img": "Egg Roll.jpg", "category": "food", "price": 45, "desc": "Soft paratha roll with egg, onion & tangy chutney", "veg": False },
  { "id": 8, "name": "Samosa", "img": "samosa.jpg", "category": "food", "price": 10, "desc": "Golden crispy samosa with spiced potato filling", "veg": True },
  { "id": 9, "name": "Dosa", "img": "Dosa.jpg", "category": "food", "price": 50, "desc": "Crispy South Indian dosa with coconut chutney & sambar", "veg": True },
  { "id": 10, "name": "Tea", "img": "Tea.jpg", "category": "beverages", "price": 10, "desc": "Hot refreshing masala chai to keep you going", "veg": True },
  { "id": 11, "name": "Coffee", "img": "Coffee.jpg", "category": "beverages", "price": 13, "desc": "Rich, aromatic Nescafé coffee to fuel your day", "veg": True },
  { "id": 12, "name": "Water Bottle", "img": "Water bottle.jpg", "category": "beverages", "price": 20, "desc": "500ml / 1-litre sealed mineral water bottle", "veg": True },
  { "id": 13, "name": "Cold Drink", "img": "Cold Drink.jpg", "category": "beverages", "price": 25, "desc": "Chilled cold drink - customize your brand and flavour!", "veg": True },
  { "id": 14, "name": "Ice Cream", "img": "ICE CREAM.jpg", "category": "beverages", "price": 30, "desc": "Delicious scoops, cups & cones - pick your flavour!", "veg": True },
  { "id": 15, "name": "Snacks", "img": "chips.jpg", "category": "snacks", "price": 10, "desc": "Crunchy salted or masala flavoured snacks packet", "veg": True },
  { "id": 16, "name": "Biscuits", "img": "Biscuits.jpg", "category": "snacks", "price": 10, "desc": "Assorted biscuit pack - pick your favorite variant!", "veg": True }
]

FEATURED_IDS = [4, 5, 9, 11, 7]

def seed():
    # Clear existing
    db.query(models.MenuItem).delete()
    db.commit()

    for item in MENU_ITEMS:
        db_item = models.MenuItem(
            id=item["id"],
            name=item["name"],
            img=item["img"],
            category=item["category"],
            price=item["price"],
            desc=item["desc"],
            veg=item["veg"],
            is_featured=(item["id"] in FEATURED_IDS)
        )
        db.add(db_item)
    
    db.commit()
    print("Database seeded with Menu Items!")

    # Seed Admin User
    from main import get_password_hash
    admin_email = "admin@campusbites.com"
    admin_user = db.query(models.User).filter(models.User.email == admin_email).first()
    if not admin_user:
        hashed_pw = get_password_hash("admin")
        admin_user = models.User(name="Admin User", email=admin_email, password=hashed_pw, role="admin")
        db.add(admin_user)
        db.commit()
        print("Admin user created!")

if __name__ == "__main__":
    seed()
