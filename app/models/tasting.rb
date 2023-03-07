class Tasting < ApplicationRecord
    belongs_to :wine, optional: true
    belongs_to :user, optional: true
end
