class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    has_many :wines
    has_many :wineries, through: :wines
end
 