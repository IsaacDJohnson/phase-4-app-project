class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :wines, :tastings
  has_many :wines
end
