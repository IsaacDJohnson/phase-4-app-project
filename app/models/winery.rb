class Winery < ApplicationRecord
    validates :name, :region, presence: true
    has_many :wines
    has_many :users, through: :wines

end