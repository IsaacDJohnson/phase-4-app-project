class WineSerializer < ActiveModel::Serializer
  attributes :id, :name, :verietal, :region, :year, :users, :winery
  has_many :users
end
