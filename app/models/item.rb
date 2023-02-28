class Item < ApplicationRecord
    belongs_to :wine
    belongs_to :user
end
