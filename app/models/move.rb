class Move < ApplicationRecord
  validates :origin_rooms, numericality: { only_integer: true, greater_than: 0 }
  validates :dest_rooms, numericality: { only_integer: true, greater_than: 0 }
  validates :move_date, presence: true
  validates :orig_address, presence: true
  validates :orig_city, presence: true
  validates :orig_state, presence: true
  validates :orig_zip, presence: true,
    format: {
      with: /\d{5}-?(\d{4})?/,
      message: "zip code must be valid"
    }
  validates :orig_floor, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validates :orig_distance, numericality: { only_integer: true, greater_than: 0 }
  validates :dest_address, presence: true
  validates :dest_city, presence: true
  validates :dest_state, presence: true
  validates :dest_zip, presence: true,
    format: {
      with: /\d{5}-?(\d{4})?/,
      message: "zip code must be valid"
    }
  validates :dest_floor, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validates :dest_distance, numericality: { only_integer: true, greater_than: 0 }

  t.belongs_to :user

end
