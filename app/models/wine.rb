class Wine < ApplicationRecord
    validates :name, :verietal, :region, :year, presence: true
    belongs_to :winery
    has_many :tastings
    has_many :users, through: :tastings
end
