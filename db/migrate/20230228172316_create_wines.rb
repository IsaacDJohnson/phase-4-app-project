class CreateWines < ActiveRecord::Migration[6.1]
  def change
    create_table :wines do |t|
      t.string :name
      t.string :verietal
      t.string :region
      t.integer :year
      t.integer :winery_id
      t.timestamps
    end
  end
end
