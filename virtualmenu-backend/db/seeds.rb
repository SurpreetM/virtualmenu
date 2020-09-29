# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
heading_1 = Heading.create(name: "Appetizers")
heading_2 = Heading.create(name: "Entrees")
heading_3 = Heading.create(name: "Salads")
heading_4 = Heading.create(name: "Sides")
heading_5 = Heading.create(name: "Desserts")

fooditem_1 = FoodItem.create(name: "Caeser Salad", description: "Lettuce topped with parmesaen cheese and caeser dressing.", price: 15, heading: heading_3)
fooditem_2 = FoodItem.create(name: "Bufallo Chicken Salad", description: "Crispy chicken tossed in our house bufallo sauce with mixed greens.", price: 17, heading: heading_3)

fooditem_3 = FoodItem.create(name: "Crispy Calarami", description: "Fresh calamari, lightly breaded and perfectly seasoned.", price: 10, heading: heading_1)
fooditem_4 = FoodItem.create(name: "Mixed Olives", description: "Mixed green and black olives.", price: 5, heading: heading_1)
fooditem_5 = FoodItem.create(name: "Focaccia", description: "Freslhly baked and topped with seasalt and olive oil.", price: 7, heading: heading_1)

fooditem_6 = FoodItem.create(name: "Grilled Salmon", description: "Seared Salmon with Lemon-Herb Butter Sauce, served over Wild Rice Pilaf and Vegetables.", price: 20, heading: heading_2)
fooditem_7 = FoodItem.create(name: "New York Strip Steak", description: "A 12oz. Steak Flavored with a Brandy Demi-Glace, Caramelized Onions and Sliced Mushrooms. Served with Garlic Mashed Potatoes & Vegetables.", price: 23, heading: heading_2)
fooditem_8 = FoodItem.create(name: "Mushroom Ravioli", description: "Mushroom-Stuffed Ravioli in a Cream Sauce, Topped with Roasted Mixed Vegetables.", price: 10, heading: heading_2)


ooditem_9 = FoodItem.create(name: "Sweet Potato Fries", price: 10, heading: heading_4)
ooditem_10 = FoodItem.create(name: "Green Side Salad", price: 8, heading: heading_4)
ooditem_11 = FoodItem.create(name: "Grilled Brocolli", price: 8, heading: heading_4)

ooditem_12 = FoodItem.create(name: "Selection of Gelato", price: 8, heading: heading_5)
ooditem_13= FoodItem.create(name: "Chocolate Brownies", price: 9, heading: heading_5)
ooditem_14 = FoodItem.create(name: "Pumpkin Pie", price: 9, heading: heading_5)







