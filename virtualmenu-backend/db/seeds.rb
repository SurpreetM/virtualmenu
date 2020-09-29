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
heading_4 = Heading.create(name: "Pastas")
heading_5 = Heading.create(name: "Sides")
heading_6 = Heading.create(name: "Desserts")

fooditem_1 = FoodItem.create(name: "Caeser Salad", description: "Lettuce topped with parmesaen cheese and caeser dressing.", price: 15, heading: heading_3)