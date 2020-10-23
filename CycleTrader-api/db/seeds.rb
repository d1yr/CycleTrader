# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


steve = User.create(name: "Steve", location: "Brooklyn, NY", bio: "I only really ride when its nice out.", email: "bikelover@gmail.com")
jack = User.create(name: "Jack", location: "Manhattan, NY", bio: "All my bikes are fast!", email: "bikeguy@bikes.com")
anna = User.create(name: "Anna", location: "Brooklyn, NY", bio: "i like bikes!", email: "anna@gmail.com")
emma = User.create(name: "Emma", location: "Queens, NY", bio: "I ride for fun mostly", email: "emma@hotmail.com")
bike1 = Bicycle.create(brand: "Kestrel", model: "Sci500", size: 52, frontG: 3, rearG: 9, gearset: "Shimano", condition: "new", user_id: 1)
bike2 = Bicycle.create(brand: "Specialized", model: "Roubaix", size: 55, frontG: 3, rearG: 9, gearset: "Shimano", condition: "new", user_id: 2)
bike3 = Bicycle.create(brand: "Kuota", model: "22Y", size: 53, frontG: 3, rearG: 9, gearset: "Campagnolo", condition: "new", user_id: 2)
bike4 = Bicycle.create(brand: "Schwinn", model: "Cruiser", size: 61, frontG: 1, rearG: 1, gearset: "Shimano", condition: "new", user_id: 3)
bike5 = Bicycle.create(brand: "Schwinn", model: "Cruiser", size: 41, frontG: 1, rearG: 1, gearset: "Shimano", condition: "good", user_id: 3)
bike6 = Bicycle.create(brand: "Trek", model: "Madone", size: 57, frontG: 2, rearG: 11, gearset: "Shimano", condition: "new", user_id: 4)