class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :wines
  has_many :wines
end
