class CreateWineries < ActiveRecord::Migration[6.1]
  def change
    create_table :wineries do |t|
      t.string :name
      t.string :region
      
      t.timestamps
    end
  end
end
