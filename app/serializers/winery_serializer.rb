class WinerySerializer < ActiveModel::Serializer
  attributes :id, :name, :region, :wines
end
