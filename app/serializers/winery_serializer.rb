class WinerySerializer < ActiveModel::Serializer
  attributes :id, :name, :region, :wines
  has_many :wines
end
