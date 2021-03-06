class CreateApartments < ActiveRecord::Migration[5.0]
  def change
    create_table :apartments do |t|
      t.integer :street_number
      t.string :street_name
      t.string :city
      t.integer :zip
      t.string :state
      t.string :country
      t.integer :user_id

      t.timestamps
    end
  end
end
