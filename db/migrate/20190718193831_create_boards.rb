class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :name, null: false
      t.string :manufacturer, null: false
      t.array :category
      t.string :mount_style
      t.boolean :in_production
      t.integer :year
      t.float :length
      t.float :width
      t.ingeger :num_kicktails
      
      t.timestamps
    end
  end
end
