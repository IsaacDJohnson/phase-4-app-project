class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    has_many :tastings
    has_many :wines, through: :tastings
end
 