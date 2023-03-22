class Winery < ApplicationRecord
    validates :name, :region, presence: true, uniqueness: true
    has_many :wines
end