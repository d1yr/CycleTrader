class CreateBicycles < ActiveRecord::Migration[6.0]
  def change
    create_table :bicycles do |t|
      t.string :brand
      t.string :model
      t.integer :size
      t.integer :frontG
      t.integer :rearG
      t.string :gearset
      t.string :condition
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
