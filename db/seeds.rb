# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🍷 aging wines..."

wine_type = ['Pinot Noir', 'Pinot Grigio', 'Cabernet', 'Merlot', 'Chardonnay', 'Malbec', 'Sauvignon Blanc']
wine_name = ['Flora and Vine', 'Chateau la Vie', 'Redwood Reserve', 'Rock and Stone', 'Fernetti Number 6', 'Bergusia 1908', 'Dove Tail', 'Ominous', 'Creaky Door Hinge', 'Pears and Pigeons', 'Iluminosity', 'Drowned Metropolis']
region = ['North America', 'Italy', 'France', 'Greece' ]

(10).times do
    Wine.create(name: wine_name.sample, verietal: wine_type.sample, region: region.sample, year: rand(1900..2020))
end

puts "✅ Done seeding!"