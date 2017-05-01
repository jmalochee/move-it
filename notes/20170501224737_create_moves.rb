class CreateMoves < ActiveRecord::Migration[5.0]
  def change
    create_table :moves do |t|
      t.string :comments
      t.string :origin_rooms
      t.string :dest_rooms
      t.string :move_date, null: false
      t.string :orig_address, null: false
      t.string :orig_unit
      t.string :orig_city, null: false
      t.string :orig_state, null: false
      t.string :orig_zip, null: false
      t.string :orig_floor, null: false
      t.string :orig_access
      t.string :orig_truck_access
      t.string :orig_dist_access
      t.string :dest_address, null: false
      t.string :dest_unit
      t.string :dest_city, null: false
      t.string :dest_state, null: false
      t.string :dest_zip, null: false
      t.string :dest_floor, null: false
      t.string :dest_access
      t.string :dest_truck_access
      t.string :dest_dist_access

      t.timestamps
    end
  end
end
