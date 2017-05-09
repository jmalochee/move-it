class AddAccessToMoves < ActiveRecord::Migration[5.0]
  def change
    change_table :moves do |t|
      t.string :orig_access, null: false
      t.string :dest_access, null: false
    end
  end
end
