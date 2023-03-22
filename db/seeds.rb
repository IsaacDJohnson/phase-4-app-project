# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Winery.destroy_all
User.destroy_all
Wine.destroy_all

puts "🍷 aging wines..."

wine_type = ['Pinot Noir', 'Pinot Grigio', 'Cabernet', 'Merlot', 'Chardonnay', 'Malbec', 'Sauvignon Blanc']
wine_name = ['Cerebral Sunset', 'Toussaint Red', 'The Silver Shroud', 'BlackBriar', '14 Hands', 'Helios', 'Xero Hour', 'Flora and Vine', 'Chateau la Vie', 'Redwood Reserve', 'Rock and Stone', 'Fernetti Number 6', 'Bergusia 1908', 'Dove Tail', 'Ominous', 'Creaky Door Hinge', 'Pears and Pigeons', 'Iluminosity', 'Drowned Metropolis']
region = ['North America', 'Italy', 'France', 'Greece', 'Spain', 'Argentina']

# ---------------------------------------------------------------------------------

puts "seeding Wineries"

Winery.create(name: "BlueRidge", region: 'North America')
Winery.create(name: "Villa del Monte", region: 'Italy')
Winery.create(name: "Knocking Point Vinyards", region: 'North America')
Winery.create(name: "Therianos Farms", region: 'Greece')
Winery.create(name: "Chateau Dif", region: 'France')

puts "done seeding Wineries"

# ---------------------------------------------------------------------------------

# puts "seeding Users"

# User.create(username: "John Doe", password: "password", password_confirmation: "password")

# puts "done seeding Users"

# # ---------------------------------------------------------------------------------

puts "seeding wines"

Winery.all.each do |winery|
    rand(2..5).times do 
        Wine.create(name: wine_name.sample, verietal: wine_type.sample, region: region.sample, year: rand(1900..2020), winery_id: winery.id)
    end
end

puts "done seeding wines"

# ---------------------------------------------------------------------------------

puts Winery.first
puts User.first
puts Wine.first

puts "✅ Done aging!"