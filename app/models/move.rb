class Move < ApplicationRecord
  validates :orig_rooms, numericality: { only_integer: true, greater_than: 0 }
  validates :dest_rooms, numericality: { only_integer: true, greater_than: 0 }
  validates :move_date, presence: true
  validates :orig_address, presence: true
  validates :orig_city, presence: true
  validates :orig_state, presence: true
  validates :orig_zip, presence: true,
    format: {
      with: /\d{5}-?(\d{4})?/,
      message: "zip code must be a valid 4 or 9 digit us zip code"
    }
  validates :orig_floor, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validates :orig_distance, numericality: { only_integer: true, greater_than: 0 }
  validates :dest_address, presence: true
  validates :dest_city, presence: true
  validates :dest_state, presence: true
  validates :dest_zip, presence: true,
    format: {
      with: /\d{5}-?(\d{4})?/,
      message: "zip code must be a valid 4 or 9 digit us zip code"
    }
  validates :dest_floor, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validates :dest_distance, numericality: { only_integer: true, greater_than: 0 }

  belongs_to :user

  def orig_addr
    {
      address: dest_address,
      unit: dest_unit,
      city: dest_city,
      state: dest_state,
      zip: dest_zip
    }
  end

  def dest_addr
    {
      address: orig_address,
      unit: orig_unit,
      city: orig_city,
      state: orig_state,
      zip: orig_zip
    }
  end

  def dest_addr_block
    "#{dest_address}<br/>
      #{dest_city}, #{dest_state} #{dest_zip}"
  end

  def dest_mail_addr
    if dest_unit
      "#{dest_address}, #{dest_unit}<br/>
        #{dest_city}, #{dest_state} #{dest_zip}"
    else
      dest_addr_block
    end
  end

  def orig_addr_block
    "#{orig_address}<br/>#{orig_city}, #{orig_state} #{orig_zip}"
  end

  def orig_mail_addr
    if orig_unit
      "#{orig_address}, #{orig_unit}<br/>#{orig_city}, #{orig_state} #{orig_zip}"
    else
      orig_addr_block
    end
  end

  ACCESS_OPTIONS = {
    "0" => "Ground Floor",
    "1" => "Partial Staircase",
    "2" => "Full Staircase",
    "3" => "Multiple Staircases",
    "4" => "Elevator"
  }

  TRUCK_ACCESS_OPTIONS = {
    "0" => "Driveway",
    "1" => "Street",
    "2" => "Loading Dock",
    "3" => "Parking Lot"
  }

  US_STATES = {
    "AL" => "Alabama",
    "AK" => "Alaska",
    "AZ" => "Arizona",
    "AR" => "Arkansas",
    "CA" => "California",
    "CO" => "Colorado",
    "CT" => "Connecticut",
    "DE" => "Delaware",
    "DC" => "District Of Columbia",
    "FL" => "Florida",
    "GA" => "Georgia",
    "HI" => "Hawaii",
    "ID" => "Idaho",
    "IL" => "Illinois",
    "IN" => "Indiana",
    "IA" => "Iowa",
    "KS" => "Kansas",
    "KY" => "Kentucky",
    "LA" => "Louisiana",
    "ME" => "Maine",
    "MD" => "Maryland",
    "MA" => "Massachusetts",
    "MI" => "Michigan",
    "MN" => "Minnesota",
    "MS" => "Mississippi",
    "MO" => "Missouri",
    "MT" => "Montana",
    "NE" => "Nebraska",
    "NV" => "Nevada",
    "NH" => "New Hampshire",
    "NJ" => "New Jersey",
    "NM" => "New Mexico",
    "NY" => "New York",
    "NC" => "North Carolina",
    "ND" => "North Dakota",
    "OH" => "Ohio",
    "OK" => "Oklahoma",
    "OR" => "Oregon",
    "PA" => "Pennsylvania",
    "RI" => "Rhode Island",
    "SC" => "South Carolina",
    "SD" => "South Dakota",
    "TN" => "Tennessee",
    "TX" => "Texas",
    "UT" => "Utah",
    "VT" => "Vermont",
    "VA" => "Virginia",
    "WA" => "Washington",
    "WV" => "West Virginia",
    "WI" => "Wisconsin",
    "WY" => "Wyoming"
  }
end
