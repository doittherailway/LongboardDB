class CreateManufacturers < ActiveRecord::Migration[5.2]
  def change
    create_table :manufacturers do |t|
      t.string :name, null: false
      t.string :location
      t.string :website

      t.timestamps
    end

    add_index :manufacturers, :name
  end
end
