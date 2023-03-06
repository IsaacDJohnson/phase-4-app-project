class Wine < ApplicationRecord
    validates :name, :verietal, :region, :year, :winery_id, presence: true
    belongs_to :user, optional: true
    belongs_to :winery, optional: true

end
