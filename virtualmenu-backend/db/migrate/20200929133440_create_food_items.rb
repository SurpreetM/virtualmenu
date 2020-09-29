class CreateFoodItems < ActiveRecord::Migration[6.0]
  def change
    create_table :food_items do |t|
      t.string :name
      t.string :description
      t.string :price
      t.references :heading, null: false, foreign_key: true

      t.timestamps
    end
  end
end
