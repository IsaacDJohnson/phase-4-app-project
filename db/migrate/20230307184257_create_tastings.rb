class CreateTastings < ActiveRecord::Migration[6.1]
  def change
    create_table :tastings do |t|
      t.string :name
      t.integer :rating
      t.integer :wine_id
      t.integer :user_id

      t.timestamps
    end
  end
end
