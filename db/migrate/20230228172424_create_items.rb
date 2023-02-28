class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :user_id
      t.integer :wine_id

      t.timestamps
    end
  end
end
