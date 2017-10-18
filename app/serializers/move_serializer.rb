class MoveSerializer < ActiveModel::Serializer
  attributes :move_date, :comments, :origin, :destination, :user_id, :created_at, :updated_at

  def origin
    {
      address: object.orig_addr,
      floor: object.orig_floor,
      rooms: object.orig_rooms,
      access: Move::ACCESS_OPTIONS[object.orig_access],
      truck_access: Move::TRUCK_ACCESS_OPTIONS[object.orig_truck_access],
      distance: object.orig_distance
    }
  end

  def destination
    {
      address: object.dest_addr,
      floor: object.dest_floor,
      rooms: object.dest_rooms,
      access: Move::ACCESS_OPTIONS[object.dest_access],
      truck_access: Move::TRUCK_ACCESS_OPTIONS[object.dest_truck_access],
      distance: object.dest_distance
    }
  end
end
