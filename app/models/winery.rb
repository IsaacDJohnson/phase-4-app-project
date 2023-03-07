class Winery < ApplicationRecord
    validates :name, :region, presence: true
    has_many :wines
end