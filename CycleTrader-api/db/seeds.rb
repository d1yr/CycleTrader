# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


steve = User.create(name: "steve", location: "brooklyn", bio: "i like bikes!", email: "bikelover@bikes.bike")
jack = User.create(name: "jack", location: "brooklyn", bio: "i like bikes!", email: "bikeguy@bikes.bike")


bike1 = Bicycle.create(brand: "kestrel", model: "sci500", size: 52, frontG: 3, rearG: 9, gearset: "shimano", condition: "new", user_id: 1)
bike2 = Bicycle.create(brand: "specialized", model: "roubaix", size: 55, frontG: 3, rearG: 9, gearset: "shimano", condition: "new", user_id: 2)
bike3 = Bicycle.create(brand: "kuota", model: "22y", size: 53, frontG: 3, rearG: 9, gearset: "campagnolo", condition: "new", user_id: 2)