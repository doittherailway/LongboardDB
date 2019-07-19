class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :name, null: false
      t.integer :manufacturer_id, null: false
      t.array :category
      t.string :mount_style
      t.boolean :in_production
      t.integer :year
      t.float :length
      t.float :width
      t.ingeger :num_kicktails

      t.timestamps
    end

    add_index :boards, :name
    add_index :boards, :manufacturer_id
  end
end
