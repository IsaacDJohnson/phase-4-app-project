class WineSerializer < ActiveModel::Serializer
  attributes :id, :name, :verietal, :region, :year, :winery_id
  belongs_to :winery
  belongs_to :user
end
